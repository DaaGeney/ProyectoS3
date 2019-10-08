<template>
    <sidebar-menu 
    :menu="menu"
    :collapsed="collapsed"
    @item-click="onItemClick"/>
</template>

<script>
    export default {
        name: 'sidebar',
        data() {
            return {
                menu: [
                    {
                        href: { path: '/artistas/categorias' },
                        title: 'Categorias',
                        icon: 'fas fa-sort-alpha-down',
                        child: [
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Animación',
                                
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Caricatura'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Cómic'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Cinematografía'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Dibujo'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Efectos especiales'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Escultura'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Fotografía'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Música'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Manga'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Pintura'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Retrato'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Tipografía'
                            },
                            {
                                href: { path: '/artistas/categorias' },
                                title: 'Videos publicitarios'
                            }
                        ]
                    },
                    {
                        href: { path: '/acercade' },
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
        },
        methods: {
            /*
            ----Se utiliza el $emit del $root para que pueda permitir ejecutar metodos de otro componente
            */
            onItemClick: async function (event, item) {
                //console.log("Laterales click");
                this.$root.$emit('recargarComponente', item);
                //console.log("laterales cierra");
            }
            
        }
    }
</script>

<style>
    @import url('../styles/sidebar.scss');
</style>