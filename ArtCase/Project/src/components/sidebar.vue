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
                        href: { path: '/categorias' },
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
.v-sidebar-menu{
    top:61px;
    height: calc(100vh - 61px);
}
.v-sidebar-menu .vsm--toggle-btn {

    background-color: #dc3545;
}

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 .vsm--icon{
    background-color: black;
}

.v-sidebar-menu.vsm_collapsed .vsm--mobile-bg{
    background-color: #dc3545;
}

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1{
    background-color: #2a2a2e;
}

.v-sidebar-menu .vsm--link.vsm--link_level-1.vsm--link_exact-active{
    background-color: #dc3545;
    box-shadow:  3px 0px 0px 0px white inset;
}

.v-sidebar-menu .vsm--arrow:after {
    content: '\f105';
    font-family: 'FontAwesome';
}

.v-sidebar-menu .vsm--toggle-btn:after {
    font-family: 'FontAwesome';
    content: "\f0c9";
}

</style>