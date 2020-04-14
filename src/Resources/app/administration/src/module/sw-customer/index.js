Shopware.Component.override('sw-customer-detail-addresses', {
    methods: {
        isValidAddress(address) {
            return true;
        }
    }
});
