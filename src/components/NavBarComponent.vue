<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">ToDo List</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/list">Lista de tarefas</b-nav-item>
                    <b-nav-item to="/form">Cadastro</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
</template>
<script>
export default {
    name: 'NavBarComponent'
}
</script>