<template>
    <div class="relative">
            <div class="flex flex-row items-center justify-between h-50">
                <Logo
                />
                <Elementos 
                /> 
            </div>
        </div>
</template>

<script>

import Logo from './Logo'
import Elementos from './Elementos'

export default {
    name: 'Nav',
    components:{
        Logo,
        Elementos
    }
}
</script>