cp -R ./utils/android ./temp/android
cp -R ./utils/ios ./temp/ios

cd temp
yarn

cd ios
pod install

cd ../android
bundle exec fastlane build_android

cd ../ios
fastlane build_ios