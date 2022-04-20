Install Firebase  (https://rnfirebase.io/)
-----------------------------------------------
npm install --save @react-native-firebase/app
--------------------------------------------------
Generating Android credentials
------------------------------------
On the Firebase console, add a new Android application and enter your projects details. The "Android package name" must match your local projects package name which can be found inside of the manifest tag within the /android/app/src/main/AndroidManifest.xml file within your project.

The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Authentication. To generate a certificate run cd android && ./gradlew signingReport. This generates two variant keys. You have to copy both 'SHA1' and 'SHA-256' keys that belong to the 'debugAndroidTest' variant key option. Then, you can add those keys to the 'SHA certificate fingerprints' on your app in Firebase console.

===========================================================================================

Task :app:signingReport
Variant: debug
Config: debug
Store: D:\MobileApp\reactnative\catharsis\android\app\debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, 1 May, 2052
----------
Variant: release
Config: debug
Store: D:\MobileApp\reactnative\catharsis\android\app\debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, 1 May, 2052
----------
Variant: debugAndroidTest
Config: debug
Store: D:\MobileApp\reactnative\catharsis\android\app\debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, 1 May, 2052
----------
Variant: debugUnitTest
Config: debug
Store: D:\MobileApp\reactnative\catharsis\android\app\debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, 1 May, 2052
----------
Variant: releaseUnitTest
Config: debug
Store: D:\MobileApp\reactnative\catharsis\android\app\debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Wednesday, 1 May, 2052
----------

> Task :react-native-firebase_app:signingReport
Variant: debugAndroidTest
Config: debug
Store: C:\Users\krishnas.ttl\.android\debug.keystore
Alias: AndroidDebugKey
MD5: 55:E0:63:92:FA:87:38:9E:2A:47:77:FE:70:D6:1D:72
SHA1: 25:96:58:83:A5:29:F4:85:A5:A3:67:27:D5:2D:0E:41:F6:4F:04:6E
SHA-256: 47:09:30:44:83:DF:0E:B2:45:1E:BC:7F:BD:D9:5C:E9:01:DF:68:61:CE:6B:9F:5A:72:F9:32:B7:86:8E:B0:E1
Valid until: Wednesday, 4 May, 2050
----------
Variant: debugUnitTest
Config: debug
Store: C:\Users\krishnas.ttl\.android\debug.keystore
Alias: AndroidDebugKey
MD5: 55:E0:63:92:FA:87:38:9E:2A:47:77:FE:70:D6:1D:72
SHA1: 25:96:58:83:A5:29:F4:85:A5:A3:67:27:D5:2D:0E:41:F6:4F:04:6E
SHA-256: 47:09:30:44:83:DF:0E:B2:45:1E:BC:7F:BD:D9:5C:E9:01:DF:68:61:CE:6B:9F:5A:72:F9:32:B7:86:8E:B0:E1
Valid until: Wednesday, 4 May, 2050
----------
Variant: releaseUnitTest
Config: debug
Store: C:\Users\krishnas.ttl\.android\debug.keystore
Alias: AndroidDebugKey
MD5: 55:E0:63:92:FA:87:38:9E:2A:47:77:FE:70:D6:1D:72
SHA1: 25:96:58:83:A5:29:F4:85:A5:A3:67:27:D5:2D:0E:41:F6:4F:04:6E
SHA-256: 47:09:30:44:83:DF:0E:B2:45:1E:BC:7F:BD:D9:5C:E9:01:DF:68:61:CE:6B:9F:5A:72:F9:32:B7:86:8E:B0:E1
Valid until: Wednesday, 4 May, 2050
----------

===========================================================================
Download the google-services.json file and place it inside of your project at the following location: /android/app/google-services.json.



Configure Firebase with Android credentials
-----------------------------------------------
First, add the google-services plugin as a dependency inside of your /android/build.gradle file:

buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.10'
    // Add me --- /\
  }
}

Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:
-----------------
apply plugin: "com.android.application"
apply plugin: "com.google.gms.google-services" // <- Add this line


