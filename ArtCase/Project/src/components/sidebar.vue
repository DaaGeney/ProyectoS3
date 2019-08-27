<template>
    <sidebar-menu 
    :menu="menu"
    :collapsed="collapsed"/>
</template>

<script>
    export default {
        name: 'sidebar',
        data() {
            return {
                menu: [
                    {
                        href: { path: '/artistas' },
                        title: 'Categorias',
                        icon: 'fas fa-sort-alpha-down',
                        child: [
                            {
                                href: { path: '/artistas' },
                                title: 'Dibujantes'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Musicos'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Pintores'
                            }
                        ]
                    },
                    {
                        href: { path: '/acercade' },
                        title: 'Acerca de',
                        icon: 'fas fa-info'
                    },
                    {
                        href: { path: '/contacto' },
                        title: 'Contacto',
                        icon: 'fas fa-id-card-alt'
                    }
                ],
                collapsed:true
            }
        }
    }
</script>

<style>
    @import url('../styles/sidebar.scss');
</style>