# 创建手机版 APK 实现计划

## Context

用户已拥有一个翻译完成的中文版 Vue 2 游戏（反物质维度：终局），之前已用 electron-packager 成功生成桌面版 exe。现在用户要求"类比参考 ADEndgame-MobileUI-main 的 UI，创建一个手机版 APK"。

经勘察，`ADEndgame-MobileUI-main/` 实质上是同一项目的 GitHub Pages 部署版（非专门的移动端重写），而主项目的 `public/stylesheets/styles.css` 已含 `@media (max-width: 960px/720px/480px)` 三档响应式断点和 `touch-action: manipulation` 全局触屏适配。因此"类比参考 MobileUI"= 直接复用现有响应式 CSS + 补 viewport meta + 用 Capacitor 包装 dist 为 APK。

## 方案：Capacitor 6.x + 现有 dist

选用 Capacitor 6（而非 7），因为 Capacitor 7 强制 JDK 21（issue #7879），当前环境只有 JDK 17。Capacitor 6 与 JDK 17 完美兼容。

## 实现步骤

### 步骤 1：补 viewport meta 并重建 dist

修改 [public/index.html](file:///c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/public/index.html)，在 `<meta charset="utf-8">` 后插入：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#000000">
```
然后重建：`npm run build:release`（用 npmmirror 镜像加速）

### 步骤 2：清理 dist 残留文件

删除未引用的调试残留以减小 APK 体积（~38MB → ~15MB）：
- `dist/js/app.js`（38MB，index.html 只引用 hashed 版本）
- `dist/js/chunk-vendors.js`
- `dist/js/*.map`

### 步骤 3：安装 Android SDK（命令行，无 Android Studio）

从腾讯云镜像下载并解压到 `C:\Android\Sdk\`：
1. **commandline-tools**（~120MB）：解压到 `C:\Android\Sdk\cmdline-tools\latest\`（注意 latest 嵌套层）
2. 设置环境变量 `ANDROID_HOME`、`ANDROID_SDK_ROOT`
3. 接受许可：`sdkmanager --licenses`
4. 安装：`sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"`

若 sdkmanager 下载慢，改用镜像手动下载 zip 解压（腾讯云 `https://mirrors.cloud.tencent.com/AndroidSDK/`）。

### 步骤 4：安装 Capacitor 依赖并配置

```powershell
npm config set registry https://registry.npmmirror.com
npm install @capacitor/core@^6
npm install -D @capacitor/cli@^6 @capacitor/android@^6
```

创建 `capacitor.config.json`：
```json
{
  "appId": "com.antimatterdimensions.endgame",
  "appName": "反物质维度终局",
  "webDir": "dist",
  "server": { "androidScheme": "https" },
  "android": { "backgroundColor": "#000000" }
}
```

### 步骤 5：创建 Android 工程并同步

```powershell
npx cap add android
npx cap sync android
```

配置国内镜像加速 Gradle/Maven 下载：
- `android/gradle/wrapper/gradle-wrapper.properties` → TUNA 镜像
- `android/settings.gradle` pluginManagement → 阿里云 Maven 镜像

### 步骤 6：生成 Debug APK（先出可测试版本）

```powershell
cd android
.\gradlew assembleDebug
```
产物：`android/app/build/outputs/apk/debug/app-debug.apk`（可直接装机测试，无需签名）

### 步骤 7：生成 Release APK（签名分发版，可选）

1. 生成 keystore：`keytool -genkeypair -v -keystore android/endgame.keystore -alias endgame -keyalg RSA -keysize 2048 -validity 10000`
2. 配置 `android/app/build.gradle` 的 signingConfigs
3. `.\gradlew assembleRelease`
4. 用 apksigner 签名

## 关键文件

- [public/index.html](file:///c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/public/index.html) — 补 viewport meta（触发移动端响应式断点）
- [vue.config.js](file:///c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/vue.config.js) — 已有 `publicPath: "./"`，无需改动
- [public/stylesheets/styles.css](file:///c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/public/stylesheets/styles.css) — 已含 960/720/480 三档 @media 和 touch-action，无需改动
- `capacitor.config.json` — 新增，指向 dist
- `android/` — Capacitor 生成，含完整 Gradle 工程

## 风险

- Android SDK 下载量大（~1GB），网络慢时可改用腾讯云/TUNA 镜像手动下载 zip
- Gradle Wrapper 首次下载可能卡住，改用 TUNA 镜像解决
- 游戏依赖 Google Fonts 和 Firebase（需联网），离线时云存档不可用但不影响本地游玩
- Debug APK 无需签名可直接装机测试；Release APK 需要签名才能分发

## 验证

1. `java -version` 确认 JDK 17
2. `echo $env:ANDROID_HOME` 确认 SDK 路径
3. `sdkmanager --version` 确认 SDK 可用
4. 生成 Debug APK 后，用 `adb install` 或直接传手机安装测试
5. 在手机上打开游戏，验证触屏操作、响应式布局、中文显示正常
