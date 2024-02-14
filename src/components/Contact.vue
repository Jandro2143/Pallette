<template> 
    <div class="surface-section">
        <div class="grid grid-nogutter">
            <div class="col-12 md:col-6 bg-no-repeat bg-cover p-8" style="background-image: url('/images/blocks/contact/contact-2.jpg')">
                <div class="text-white text-2xl font-medium mb-6">Contact Us</div>
                <div class="text-gray-300 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <a class="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                    <span class="mr-3">View Address on Google Maps</span>
                    <i class="pi pi-arrow-right"></i>
                </a>
                <ul class="list-none p-0 m-0 mt-6 text-white">
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-phone mr-2"></i>
                        <span>+123456789</span>
                    </li>
                    <li class="flex align-items-center mb-3">
                        <i class="pi pi-twitter mr-2"></i>
                        <span>@prime_ng</span>
                    </li>
                    <li class="flex align-items-center">
                        <i class="pi pi-inbox mr-2"></i>
                        <span>contact@primetek.com.tr</span>
                    </li>
                </ul>
            </div>
            <div class="col-12 md:col-6">
                <div class="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                    <div class="field col-12 lg:col-6 mb-4">
                        <InputText id="firstname" type="text" class="py-3 px-2 text-lg" placeholder="First Name" /> 
                    </div>
                    <div class="field col-12 lg:col-6 mb-4">
                        <InputText id="lastname" type="text"  class="py-3 px-2 text-lg" placeholder="Last Name" /> 
                    </div>
                    <div class="field col-12 mb-4">
                        <InputText id="email" type="text"  class="py-3 px-2 text-lg" placeholder="Email" /> 
                    </div>
                    <div class="field col-12 mb-4">
                        <InputText id="phone" type="text"  class="py-3 px-2 text-lg" placeholder="Phone" /> 
                    </div>
                    <div class="field col-12 mb-4">
                        <Textarea id="message" :rows="3" :autoResize="true" class="py-3 px-2 text-lg" placeholder="Message"></Textarea> 
                    </div>
                    <div class="col-12 text-right">
                        <Button label="Submit" icon="pi pi-envelope" class="px-5 py-3 w-auto"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>