'use strict';

module.exports = (config, webpack) => {
    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /\/__tests__\//
    }));
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            'lodash/get': 'lodash/get.js',
            'lodash/isObject': 'lodash/isObject.js',
            'lodash/isEmpty': 'lodash/isEmpty.js',
            'lodash/isNil': 'lodash/isNil.js',
            'lodash/isEqual': 'lodash/isEqual.js',
            'lodash/transform': 'lodash/transform.js',
            'lodash/startsWith': 'lodash/startsWith.js',
            'date-fns/formatISO': 'date-fns/formatISO/index.js',
        }
    };
    return config;
};