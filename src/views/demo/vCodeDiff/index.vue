<template>
    <div style="width: 80%">
        <code-diff :new-string="'3456'" :old-string="'12345'" file-name="test.txt" output-format="side-by-side" />
    </div>
</template>

<script lang="ts" setup>
import { CodeDiff } from 'v-code-diff'
</script>

<style scoped></style>
