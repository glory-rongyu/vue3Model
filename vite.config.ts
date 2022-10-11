// @ts-ignore
import path, { resolve } from 'path'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'
import legacyPlugin from '@vitejs/plugin-legacy'

const pathResolve = (dir: string): any => {
    return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
    '@': pathResolve('./src/'),
    assets: pathResolve('./src/assets')
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())
    console.log('mode_', mode)
    console.log('env.VITE_AXIOS_BASE_URL__', env.VITE_AXIOS_BASE_URL)
    console.log('command_', command)
    return {
        resolve: { alias },
        server: {
            proxy: {
                // 使用 proxy 实例
                '/api': {
                    target: env.VITE_AXIOS_BASE_URL,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '/api')
                }
            }
        },
        plugins: [
            vue(),
            viteMockServe({
                mockPath: '/mock',
                supportTs: true,
                localEnabled: command === 'serve' && mode !== 'prod'
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            }),
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), `${alias.assets}/svgs`)],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
                /**
                 * 自定义插入位置
                 * @default: body-last
                 */
                // @ts-ignore
                // eslint-disable-next-line no-bitwise
                inject: 'body-last' | 'body-first',
                /**
                 * custom dom id
                 * @default: __svg__icons__dom__
                 */
                customDomId: '__svg__icons__dom__'
            }),
            viteCompression({
                //gzip压缩
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            }),
            legacyPlugin({
                targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
            })
        ],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            commonjsOptions: {
                //antv 打包出错问题
                ignoreTryCatch: false
            },
            // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
            rollupOptions: {
                output: {
                    //静态资源分类打包
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                    manualChunks(id) {
                        //静态资源分拆打包
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString()
                        }
                    }
                }
            }
        }
    }
})
