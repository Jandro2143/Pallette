<template>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center font-bold text-blue-600 mb-4">Unlock Your Pallet Solutions</div>
    <div class="text-center font-bold text-900 mb-5 text-4xl">One Platform for All Your Pallet Needs</div>
    <div class="grid">
        <div class="col-12 lg:col-6 flex align-items-center justify-content-center">
            <img src="/images/blocks/feature/feature-illustration-1.svg" alt="Image" class="w-full md:w-9" v-if="activeTab1 == 0" />
            <img src="/images/blocks/feature/feature-illustration-2.svg" alt="Image" class="w-full md:w-9" v-if="activeTab1 == 1" />
            <img src="/images/blocks/feature/feature-illustration-3.svg" alt="Image" class="w-full md:w-9" v-if="activeTab1 == 2" />
        </div>
        <div class="col-12 lg:col-6 mt-5 lg:mt-0">
            <ul class="list-none m-0 p-0">
                <li class="border-left-2 p-4 cursor-pointer" @mouseover="activeTab1 = 0" :class="{'surface-border': activeTab1 !== 0, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 0}">
                    <div class="text-2xl font-medium">Pallette Removal</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li class="border-left-2 p-4 cursor-pointer" @mouseover="activeTab1 = 1" :class="{'surface-border': activeTab1 !== 1, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 1}">
                    <div class="text-2xl font-medium">?</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
                <li class="border-left-2 p-4 cursor-pointer" @mouseover="activeTab1 = 2" :class="{'surface-border': activeTab1 !== 2, 'text-blue-900 bg-blue-50 border-blue-500': activeTab1 === 2}">
                    <div class="text-2xl font-medium">?</div>
                    <p class="line-height-3 text-xl">Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            activeTab1: 0, // Initializing activeTab1 with a default value
        };
    },
});
</script>