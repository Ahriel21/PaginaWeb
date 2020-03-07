// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //Cambiar cuando tenga la base de datos verdadera
  firebaseConfig: {
    apiKey: "AIzaSyC4uCoEiCgd3P1m8OTJKmcJkq8LRaviztQ",
    authDomain: "mitfg-7a053.firebaseapp.com",
    databaseURL: "https://mitfg-7a053.firebaseio.com",
    projectId: "mitfg-7a053",
    storageBucket: "mitfg-7a053.appspot.com",
    messagingSenderId: "910277428053",
    appId: "1:910277428053:web:ff5c78e35c2a3d6333e5dc"
  },

  serviceAccount: {
    "type": "service_account",
    "project_id": "mitfg-7a053",
    "private_key_id": "0071139bbe5f8e84daa05fd1fcd2311d564e0597",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDM/xMAn4mWH33i\n8pNuqTb7bMoPZ5CH43073TIb0+e8tZ1h/PKx/KmVmnmXLXsZeHSD1nzTtbN5ttcH\nyyNiZjA+/NFbUzGlFVDSkWPwWhO9PC1fWYwEXV7ZcZbcNIAfk3hBakMvi8/qunzy\nSgZP132BsNQkmmfeY1kB7FKVIhFb59hn1Gr3SdwhyaxeFA5bAbdyl08ReK/WQUWi\nyHyhxsODHxg8CGSSQsIpcJa5cnMzHgtMz3+sA1jMi2SsudM7vCuApNHPdtBJR0P4\nujT8MRmjUZmg8fWf6CzfMUk/XLO7W51jVOu65r1cY3C4r2l23XejaiK9TTOr7wOB\nmZLjfe5rAgMBAAECggEARzTI+HvyMkPRGf5xyMwdbZs92rj6IsGZ9Cvi5nimc83Q\nE8Pl135wt6cXWjRxoIjPTCY6aN2iMIKa0bm1mk3tr0tpO2Q8B+BOGT5obQoU9jQL\nfKXhtXhrZHOI2Aeig5VZfbt4B/F0MNBDa3PcGmq7TUvLfMVnk/+FYN4iV2wkhHv1\n8X++af2/Hv6nC4oxZFeLMhgxg08rFWZPS51r8jpBspHaqfCP0aXelb1Jan10giqT\nJdqf+JK00hGx6XYXoSHDFJMG1dL/sPHAwIQed9lomFw4lteKMkw0Rphscu0kV1ES\nEkPK3hcxBhX4y9yNx8R3algpiCh/XltZFWV8PCmHGQKBgQD39SEZmbNhoXJC0GCF\n7cYAh3griO+95rf68FFUrXgp8LN7llm+IDR4ps68Gb7tFzvURouRZJavE7doRbCc\nBR0i8JdAsbzFPodXNLSpMSD8RfjXizit+hQg6w8ScnfxE5fjJ4Zk4LqsJqb2SaNK\nhhGm0t6HGzGQbitLEj6evu+EYwKBgQDTpTmI6RTwfixxSF6fuiXrkCVpofQa+zXd\nQBhwglYfwCOAq6auBc8yY12HnIl+V6zrKZ+/TdI6hzlAqsG/vlE2LqdhGWNHFqGc\nNemoPrD+nb8gkct2qthO1VdMXv7B1Elr+6y7eLvxH4a5yDFXliu+eafOwIVz4GPa\nQNkx8PP4WQKBgQCcMXLHUJW5w1xZkC+tTelzPeLJ8bmrcyGj1iw1XgyaxsAY8s3X\nQSwscE88GC+34/HRNxsF3Eo7QP1Alt24elQvRUTSAOQ7j7brjQzco1D2+RDWniF3\nHlf9oHRfF3JMjx4XfjdfZlzQwoxcCmjtMeT+pEh+7Pdc1rk40eZWU0pHpwKBgF/z\nuHHpuiSOD3gMZ1ni+u4hG9UYJ6NT4Me+F1ZqwMEESxQ6vgaHe7hMdErXHT66YRr8\ndAA3N+hxBfPbdpuHnSoDXL8Y03mXOQ2pI5WzVmsY+V26u5PBQO/8qOdm6fjWVbMv\nFtCnnA1lTZ9Ms5IR8yMX5IxHnDk8sghw/gc2RmWBAoGAB3Zak3LtpUbRlru6BlTi\nlgwmAUyQ/YtlLh+nCzRQsxTaQEH7WS7Kcz1Tl42YUUrYcQCAVqb0D7ETFGirvNC0\n0bLruj4xFFy8PJAi5EFdUzVrQyO8gae9MaUJeQvyhWbMoOcooVte83YTunKKFyk0\nS1HUxqNyIkWk+OpvT96ETAg=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-4kh1x@mitfg-7a053.iam.gserviceaccount.com",
    "client_id": "113036987549291616796",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4kh1x%40mitfg-7a053.iam.gserviceaccount.com"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
