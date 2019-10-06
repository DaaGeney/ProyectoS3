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
                                title: 'Animación'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Caricatura'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Cómic'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Cinematografía'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Dibujo'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Efectos especiales'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Escultura'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Fotografía'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Música'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Manga'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Pintura'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Retrato'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Tipografía'
                            },
                            {
                                href: { path: '/artistas' },
                                title: 'Videos publicitarios'
                            }
                        ]
                    },
                    {
                        href: { path: '/about' },
                        title: 'Acerca de',
                        icon: 'fas fa-info'
                    }/*,
                    {
                        href: { path: '/contacto' },
                        title: 'Contacto',
                        icon: 'fas fa-id-card-alt'
                    }*/
                ],
                collapsed:true
            }
        }
    }
</script>

<style>
    @import url('../styles/sidebar.scss');
</style>