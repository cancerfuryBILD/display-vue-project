<template>
    <section class="services">
        <div class="container"><h2>{{ headline }}</h2></div>
        <div class="services-tabs">
            <div class="container text-center">
                <ul class="nav nav-pills" id="pills-tab" role="tablist" >
                    <li class="nav-item col-md-3" v-for="(tabItem, index) in tabItems" :key="index">
                        <a :class="tabItem.tabLinkClass" 
                        :id="tabItem.tabId" 
                        :data-toggle="tabItem.tabDataToggle"
                        :href="tabItem.tabHref" 
                        :role="tabItem.tabRole" 
                        :aria-controls="tabItem.tabAriaControls" 
                        :aria-selected="tabItem.tabAriaSelected">
                        <div :class="tabItem.tabClass"></div>
                        <h3>{{ tabItem.tabHeadline }}</h3>
                        </a>
                    </li>
                </ul>    
            </div>
        </div>
        <div class="tab-content container" id="pills-tabContent">
            <div v-for="(tabText, index) in tabTexts" 
                :key="index" 
                :class="tabText.textClass" 
                :id="tabText.textId" 
                role="tabpanel" 
                :aria-labelledby="tabText.textAriaLabelledBy"
                v-html="tabText.text">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            headline: 'Services',
            tabItems: [
                {
                    tabHeadline: 'websites',
                    tabRole: 'tab',
                    tabDataToggle: 'tab',
                    tabLinkClass: ['active', 'nav-link'],
                    tabClass: ['tab-services', 'websites', 'col-sm-3'],
                    tabAriaSelected: 'true',
                    tabAriaControls: 'pills-websites',
                    tabHref: '#pills-websites',
                    tabId: 'pills-websites-tab',
                    tabText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                        Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                        Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. 
                        Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    tabHeadline: 'photography',
                    tabRole: 'tab',
                    tabDataToggle: 'tab',
                    tabLinkClass: 'nav-link',
                    tabClass: ['tab-services', 'photography', 'col-sm-3'],
                    tabAriaSelected: 'false',
                    tabAriaControls: 'pills-photography',
                    tabHref: '#pills-photography',
                    tabId: 'pills-photography-tab',
                    tabText: `Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    tabHeadline: 'seo',
                    tabRole: 'tab',
                    tabDataToggle: 'tab',
                    tabLinkClass: 'nav-link',
                    tabClass: ['tab-services', 'seo', 'col-sm-3'],
                    tabAriaSelected: 'false',
                    tabAriaControls: 'pills-seo',
                    tabHref: '#pills-seo',
                    tabId: 'pills-seo-tab',
                    tabText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu 
                        sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
                        luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    tabHeadline: 'applications',
                    tabRole: 'tab',
                    tabDataToggle: 'tab',
                    tabLinkClass: 'nav-link',
                    tabClass: ['tab-services', 'applications', 'col-sm-3'],
                    tabAriaSelected: 'false',
                    tabAriaControls: 'pills-applications',
                    tabHref: '#pills-applications',
                    tabId: 'pills-applications-tab',
                    tabText: `Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                }
            ],
           tabTexts: [
               {
                    text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                      Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                      Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. 
                      Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>
                      <ul class="services-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.</li>
                      </ul>`,
                    textClass:['tab-pane', 'fade', 'show', 'active'],
                    textId:'pills-websites',
                    textAriaLabelledBy: 'pills-websites-tab'
               },
               {
                   text: `<p>Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                      id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>`,
                    textClass:['tab-pane', 'fade'],
                    textId:'pills-photography',
                    textAriaLabelledBy: 'pills-photography-tab'
               },
               {
                   text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu 
                      sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
                      luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>`,
                    textClass:['tab-pane', 'fade'],
                    textId:'pills-seo',
                    textAriaLabelledBy: 'pills-seo-tab'
               },
               {
                   text: `<p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                      id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>`,
                    textClass:['tab-pane', 'fade'],
                    textId:'pills-applications',
                    textAriaLabelledBy: 'pills-applications-tab'
               },
           ]
        }
    }
}
</script>

<style>
    .services-tabs {
        background-color: #efefef;
        margin-bottom: 25px;
        margin-top: 24px;
    }
    .services-tabs .nav-pills {
        width: 100%;
    }
    .services-tabs .nav-pills li {
        padding: 0px;
    }
    .services-tabs .nav-pills a {
        padding: 35px 0px 50px 0px;
    }
    .services-tabs .nav-pills .nav-link {
        border-radius: 0px;
    }
    .services-tabs .nav-pills .nav-link.active{
        background-color: #dadada;
    }
    .websites, 
    .photography, 
    .seo, 
    .applications {
        height: 89px;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0px auto 5px;
        padding: 0px;
    }
    .websites {
        background-image: url('../../assets/websites.svg');
    }
    .photography {
        background-image: url('../../assets/photography.svg');
    }
    .seo {
        background-image: url('../../assets/seo.svg');
    }
    .applications {
        background-image: url('../../assets/applications.svg');
    }

    .services-list{
        margin: 16px 18px 0px;
        line-height: 1.5625rem;
        list-style-image: url('../../assets/bullet.svg');
        list-style-position: inside;
        padding: 0;
    }
    .services-info {
        margin-bottom:  42px;
        min-height: 158px;
    }
    .services .tab-content {
        margin-bottom:  41px;
        min-height: 158px;
    }
    .services h2 {
        margin: 0px;
    }
    .services h3 {
        margin: 0px;
    }
    .services {
        margin-bottom: 41px;
    }

    @media screen and (max-width: 768px) {
        .services {
            display: none;
        }
    }
</style>
