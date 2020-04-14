# Shopware 6 customer address edit hotfix

This is a hotfix for [this issue](https://github.com/shopware/platform/issues/721) in [shopware6 platform](https://github.com/shopware/platform) implemented as a plugin.

As stated by [@rasgor](https://github.com/rasgor) this is caused by 'customer_adress' entity not having required properties. Thus this hotfix just overrides the isValidAddress() function of [sw-customer-detail-addresses](https://github.com/shopware/platform/blob/master/src/Administration/Resources/app/administration/src/module/sw-customer/view/sw-customer-detail-addresses/index.js) and returns true.
