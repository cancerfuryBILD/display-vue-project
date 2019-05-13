<template><div class="accordion-mobile">
    <div class="accordion" id="accordionExample" v-for="(item, index) in accordionItems" :key="index">
        <div class="card">
            <div class="card-header text-center" :id="item.cardId">
            <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="item.target" aria-expanded="false" :aria-controls="item.textId">
                    {{ item.buttonTitle }}
                </button>
            </h5>
            </div>

            <div :id="item.textId" class="collapse " :aria-labelledby="item.areaLabel" data-parent="#accordionExample">
                <div class="card-body">
                    {{ item.text }}
                 </div>
            </div>
        </div>
    </div></div>
</template>

<script>
export default {
    name: 'Accordion',
    data() {
        return {
            accordionItems: [
                {
                    cardId: 'headingOne',
                    buttonTitle: 'websites',
                    target: '#collapseOne',
                    areaLabel: 'headingOne',
                    textId: 'collapseOne',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                        Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
                        Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. 
                        Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    cardId: 'headingTwo',
                    buttonTitle: 'photography',
                    target: '#collapseTwo',
                    areaLabel: 'headingTwo',
                    textId: 'collapseTwo',
                    text: `Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    cardId: 'headingThree',
                    buttonTitle: 'seo',
                    target: '#collapseThree',
                    areaLabel: 'headingThree',
                    textId: 'collapseThree',
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu 
                        sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
                        luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                },
                {
                    cardId: 'headingFour',
                    buttonTitle: 'applications',
                    target: '#collapseFour',
                    areaLabel: 'headingFour',
                    textId: 'collapseFour',
                    text: `Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, 
                        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.`
                }
            ]
        }
    }
}
</script>

<style>
    .card-header button {
        color: #8a8888;
        text-decoration: none;
        font-size: 1.3rem;
    }
    .card-header .btn-link:focus, .card-header .btn-link:hover {
        color: #2ecc71;
        text-decoration: none;
    }
    .accordion-mobile {
        margin-bottom: 200px;
    }
    .accordion-mobile .card-body {
        color: #8a8888;
        font-size: 1rem;
        text-transform: none;
        font-family: 'Helvetica', Arial, sans-serif;
    }
    .accordion-mobile {
        display: none;
    }
    @media (max-width: 768px) {
        .accordion-mobile {
            display: block;
        }
    }
</style>
