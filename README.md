# parcel-plugin-notifier

Parcel plugin that shows native OS notifications after builds.




## Install
```
yarn add parcel-plugin-notifier --dev
```


## Usage

By default, a notification is triggered after every build, successful or not.

If you want to show notifications only on builds that failed, then set the `PARCEL_NOTIFIER_LEVEL` ENV variable with value `error`, before running `parcel`

```
export PARCEL_NOTIFIER_LEVEL=error

# then run parcel ...
parcel watch <your_files_here>
```



## Contribute
PRs accepted.

