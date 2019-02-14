const notifier = require('node-notifier');

const showOnlyErrors = (process.env.PARCEL_NOTIFIER_LEVEL === 'error');


let lastBuildHadError = false;

module.exports = function (bundler) {


    if ( ! showOnlyErrors ) {
        bundler.on('buildEnd', () => {

            // lastBuildHadError is used as a flag to now show the "Build finished" message if there was a build error
            if (lastBuildHadError) {
                lastBuildHadError = false; // clear the "error" flag
            }
            else {

                notifier.notify({
                    title: 'Build finished.',
                    message: 'parcel-bundler',
                });
            }
        });
    }


    bundler.on('buildError', error => {
        notifier.notify({
            title: 'Build FAILED!',
            message: 'parcel-bundler',
        });

        lastBuildHadError = true;
    });

};
