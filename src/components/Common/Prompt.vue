<template>
    <div class="modal-mask" >
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper" @click.self="closePrompt">
                    <div class="modal-container">

                        <!-- MODAL HEADER - TITLE -->
                        <div class="modal-header">
                            <slot name="header">
                            Action Required
                            </slot>
                        </div>
                        
                        <!-- MODAL BODY - MESSAGE -->
                        <div class="modal-body">
                            <slot name="body">
                                {{message}}
                            </slot>
                        </div>

                        <!-- MODAL FOOTER - BUTTONS -->
                        <div class="modal-footer">
                            <slot name="footer">
                            <button class="modal-default-button" @click="onConfirm">
                                {{confirmationLabel}}
                            </button>
                            <button class="modal-default-button" @click="onCancel">
                                {{cancelLabel}}
                            </button>
                            </slot>
                        </div>
                        
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Prompt',
    props: {
        message: {
            type: String,
            required: true,
        },
        onConfirm: {
            type: Function
        },
        onCancel: {
            type: Function
        },
        confirmationLabel: {
            type: String
        },
        cancelLabel: {
            type: String
        },
    },
    methods: {
        closePrompt() {
            this.$store.commit('prompt/setShowModal', false)
        }
    }
}
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
    margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }
    .modal-header, .modal-footer {
        border: none;
    }
    .modal-default-button {
        float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
