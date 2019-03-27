<template>
    <section class="footer">
        <call-to-action-2 :callActionTitle="callActionTitle" />
        <footer>
            <div class="container">
                <p>COPYRIGHT 2019 DISPLAY. ALL RIGHTS RESERVED</p>
                <app-footer-navigation />
            </div>
        </footer>
    </section>
</template>

<script>
import CallToAction2 from "@/components/Common/CallToAction2.vue";
import FooterNavigation from "@/components/Footer/FooterNavigation.vue";

export default {
    name: "Footer",
    components: {
        "call-to-action-2": CallToAction2,
        "app-footer-navigation": FooterNavigation
    },
    data() {
        return {
            callActionTitle: 'Are You Ready To Be Blown Away?'
        }
    }
}
</script>

<style>
/* html {
   min-height: 100%;
   position: relative;
}
.footer {
    bottom: 0;
    width: 100vw;
    position: absolute;
    height: 200px;
} */
footer {
    background-color: #efefef;
    padding-top: 23px;
    padding-bottom: 15px;
    font-size: 12px;
}
footer p {
    display: inline;
    font-size: 0.75rem;
}
footer, footer a {
    color: #a5a5a5;
}
 @media (max-width: 576px) {
    footer {
        text-align: center;
    }
 }
</style>
