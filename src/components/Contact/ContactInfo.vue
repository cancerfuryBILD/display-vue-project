<template>
    <section class="contact-info">
        <div class="address">
            <h2>Contact Info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.</p>
            <p>
                email: <a class="active" href="mailto:info@display.com">info@display.com</a><br/>
                phone: 1.306.222.4545</p>
            <p>222 2nd Ave South<br/>
                Saskabush, SK S7M 1T6
            </p>
        </div>
        <div class="store-hours">
        <h2>Store Hours</h2>
        <table>
            <tr>
                <td class="td-right-margin">Monday - Thursday</td>
                <td>8 am - 5 pm</td>
            </tr>
            <tr>
                <td class="td-right-margin">Friday</td>
                <td>8 am - 6 pm</td>
            </tr>
            <tr>
                <td class="td-right-margin">Saturday</td>
                <td>9 am - 5 pm</td>
            </tr>
            <tr>
                <td class="td-right-margin">Sunday &amp; Holidays</td>
                <td>Closed</td>
            </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactInfo',
    data() {
        return {

        }
    }
}
</script>

<style>
.contact-info {
    padding-left: 102px;
}
.address p {
    margin-bottom: 10px;
}
.store-hours {
    margin-top: 36px;
}
.contact-info h2 {
    margin-bottom: 18px;
}
.td-right-margin {
    padding-right: 70px;
}
.address a {
    color: #2ecc71;
}
@media (max-width: 768px) {
    .contact-info {
        padding-left: 40px;
    }
    .td-right-margin {
    padding-right: 30px;
}
}
@media (max-width: 576px) {
    .contact-info {
        padding-left: 0px;
        margin-top: 36px;
    }
    .td-right-margin {
    padding-right: 50px;
}
}
</style>
