<template>
    <div class="relative shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-50">
                <Logo
                />
                <Elementos
                />
            </div>
        </div>
    </div>
</template>

<script>

import Logo from './Logo'
import Elementos from './Elementos'

export default {
    name: 'nav',
    components:{
        Logo,
        Elementos
    }
}
</script>