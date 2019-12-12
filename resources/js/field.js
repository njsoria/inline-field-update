Nova.booting((Vue, router, store) => {
    Vue.component('index-liveupdate', require('./components/IndexField'))
    Vue.component('detail-liveupdate', require('./components/DetailField'))
    Vue.component('form-liveupdate', require('./components/FormField'))
    Vue.component('boolean-index-liveupdate', require('./components/BooleanIndexField'))
    Vue.component('boolean-detail-liveupdate', require('./components/BooleanDetailField'))
    Vue.component('boolean-form-liveupdate', require('./components/BooleanFormField'))
})
