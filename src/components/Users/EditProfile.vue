 <template>
    <div>
        <page-title :headline="headline"/>
        <div class="container user-update-profile">
            <div class="login shadow">
                <form>
                    <h2>Edit your info</h2>

                    <!-- FIRST NAME INPUT -->
                    <div>
                        <label for="firstName">First Name</label>
                        <input name="firstName" 
                            type="text"
                            v-model="user.firstName"
                            disabled>
                    </div>

                    <!-- LAST NAME INPUT -->
                    <div>
                        <label for="lastName">Last Name</label>
                        <input name="lastName" 
                            type="text"
                            v-model="user.lastName"
                            disabled>
                    </div>

                    <div>
                        <label for="lastName">Link to avatar</label>
                        <input name="avatar" 
                            type="text"
                            v-model="user.img">
                    </div>

                    <!-- EMAIL INPUT -->
                    <div >
                        <label for="email">Email</label>
                        <input name="email" 
                            type="email"
                            v-model="user.email"
                            disabled>
                    </div>

                    <!-- OCCUPATION INPUT -->
                    <div >
                        <label for="occupation">Occupation</label>
                        <input name="occupation" 
                            type="text"
                            v-model="user.occupation">
                    </div>

                    <!-- BIOGRAPHY INPUT -->
                    <div>
                        <label for="biography">Biography</label>
                        <textarea name="biography" v-model="user.biography"></textarea>
                    </div>

                    <button @click="updateUserInfo" type="submit" >Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {store} from "../../store/index";
export default {
    components: {
        PageTitle
    },
    data() {
        return {
            headline: 'Update Profile'
        }
    },
    computed: {
        user() {
            return this.$store.getters['auth/user'];
        }
    },
    methods: {
        updateUserInfo() {
            db.collection('users').doc(this.user.user_uid).update({
                occupation: this.user.occupation,
                biography: this.user.biography,
                img: this.user.img,
            })//.then(() => {
            //     this.$router.push({ path: '/profile/' + user.user_id })
            //     })
        }
    }
}
</script>

<style>
.user-update-profile textarea, .user-update-profile input {
    width: 80%;
}
.user-update-profile .login {
      max-width: 600px;
}
.user-update-profile label {
    margin-bottom: 0;
    display: block;
}
.user-update-profile label:hover {
    color: #737373;
    cursor: auto;
}
</style>
