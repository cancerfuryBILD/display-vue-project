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
                            v-model="singleUser.firstName"
                            disabled>
                    </div>

                    <!-- LAST NAME INPUT -->
                    <div>
                        <label for="lastName">Last Name</label>
                        <input name="lastName" 
                            type="text"
                            v-model="singleUser.lastName"
                            disabled>
                    </div>

                    <div>
                        <label for="lastName">Link to avatar</label>
                        <input name="avatar" 
                            type="text"
                            v-model="singleUser.img">
                    </div>

                    <!-- EMAIL INPUT -->
                    <div >
                        <label for="email">Email</label>
                        <input name="email" 
                            type="email"
                            v-model="singleUser.email"
                            disabled>
                    </div>

                    <!-- ROLE INPUT -->
                    <div >
                        <label for="role">Role</label>
                        <select v-model="singleUser.role" :disabled="currentUser.role !== 'Admin'">
                            <option>Admin</option>
                            <option>Blogger</option>
                            <option>Moderator</option>
                            <option>User</option>
                        </select>
                        <!-- <input name="role" 
                            type="text"
                            v-model="singleUser.role"
                            :disabled="currentUser.role !== 'Admin'"> -->
                    </div>

                    <!-- OCCUPATION INPUT -->
                    <div >
                        <label for="occupation">Occupation</label>
                        <input name="occupation" 
                            type="text"
                            v-model="singleUser.occupation">
                    </div>

                    <!-- BIOGRAPHY INPUT -->
                    <div>
                        <label for="biography">Biography</label>
                        <textarea name="biography" v-model="singleUser.biography"></textarea>
                    </div>

                    <button @click.prevent="updateUserInfo">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle.vue';
import {store} from "../../store/index";
import db from '../../firebase/init';
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
        singleUser() {
            return this.$store.getters['users/singleUser'];
        },
        currentUser() {
            return this.$store.getters['auth/currentUser'];
        }
    },
    methods: {
        updateUserInfo() {
            db.collection('users').doc(this.singleUser.id).update({
                occupation: this.singleUser.occupation,
                biography: this.singleUser.biography,
                img: this.singleUser.img,
                role: this.singleUser.role
            }).then((response) => {
                this.$router.push({ path: '/profile/' + this.singleUser.id })
            })
        }
    }
}
</script>

<style>
    .user-update-profile textarea, .user-update-profile input, .user-update-profile select {
        width: 80%;
    }
    .user-update-profile select {
        padding-top: 11px;
        padding-bottom: 11px;
        border: 
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
