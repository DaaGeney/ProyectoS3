<template>
    <sidebar-menu 
    :menu="menu"
    :collapsed="collapsed" />
</template>

<script>
    export default {
        name: 'sidebar',
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Categorias',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/categorias',
                        title: 'Categorias',
                        icon: 'fa fa-code'
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
                ],
                collapsed:true
            }
        }
    }
</script>

<style>
</style>