<template>
    <div class="mt-4">

          <v-text-field
          dense
            color="success"
            v-model="field.text"
            :label="field.label"
            :placeholder="field.placeholder"
            prepend-inner-icon="mdi-magnify"
            outlined
          ></v-text-field>

    </div>
</template>

<script>
export default {
    name: 'txt',
    props:  ['fields'],
    data() {
        return {
            field: this.fields
        };
    },
    created() {
        this.$emit("fields", this.field);
    },
}
</script>

<style scoped>
</style>