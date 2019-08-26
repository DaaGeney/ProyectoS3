<template>
    <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            return {
                props: {
                    // Sidebar menu (required)
                    menu: {
                        type: Array,
                        required: true
                    },

                    // Sidebar Collapse state
                    collapsed: {
                        type: Boolean,
                        default: true
                    }
                },

                menu: [
                    {
                        header: true,
                        title: 'Categorias',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/categorias',
                        title: 'Categorias',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
</style>