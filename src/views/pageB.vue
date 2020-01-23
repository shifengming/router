<template>
    <div>
        this is page B
        {{id}}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        // created() {
            // console.log(this.$route.params.id)
        // }
        mounted(){
            // console.log(this.props)
        }
    }
</script>

<style scoped>

</style>