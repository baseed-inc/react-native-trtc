/**
 * 视频分辨率
 * http://doc.qcloudtrtc.com/group__TRTCCloudDef__android.html#aa3b72c532f3ffdf64c6aacab26be5f87
 */
export const VideoResolution = {
    "TRTC_VIDEO_RESOLUTION_120_120": 1,
    "TRTC_VIDEO_RESOLUTION_160_160": 3,
    "TRTC_VIDEO_RESOLUTION_270_270": 5,
    "TRTC_VIDEO_RESOLUTION_480_480": 7,
    "TRTC_VIDEO_RESOLUTION_160_120": 50,
    "TRTC_VIDEO_RESOLUTION_240_180": 52,
    "TRTC_VIDEO_RESOLUTION_280_210": 54,
    "TRTC_VIDEO_RESOLUTION_320_240": 56,
    "TRTC_VIDEO_RESOLUTION_400_300": 58,
    "TRTC_VIDEO_RESOLUTION_480_360": 60,
    "TRTC_VIDEO_RESOLUTION_640_480": 62,
    "TRTC_VIDEO_RESOLUTION_960_720": 64,
    "TRTC_VIDEO_RESOLUTION_160_90": 100,
    "TRTC_VIDEO_RESOLUTION_256_144": 102,
    "TRTC_VIDEO_RESOLUTION_320_180": 104,
    "TRTC_VIDEO_RESOLUTION_480_270": 106,
    "TRTC_VIDEO_RESOLUTION_640_360": 108,
    "TRTC_VIDEO_RESOLUTION_960_540": 110,
    "TRTC_VIDEO_RESOLUTION_1280_720": 112,
    "TRTC_VIDEO_RESOLUTION_1920_1080": 114,
}
/**
 * 分辨率模式
 */
export const VideoResolutionMode = {
    "TRTC_VIDEO_RESOLUTION_MODE_LANDSCAPE": 0,
    "TRTC_VIDEO_RESOLUTION_MODE_PORTRAIT": 1,
}
export const RenderMode = {
    "TRTC_VIDEO_RENDER_MODE_FILL": 0,
    "TRTC_VIDEO_RENDER_MODE_FIT": 1,
}
/**
 * 应用场景
 * http://doc.qcloudtrtc.com/group__TRTCCloudDef__android.html#a2ba88700d4e8f364866c328ad3fedc2a
 */
export const Scene = {
    "TRTC_APP_SCENE_VIDEOCALL": 0,
    "TRTC_APP_SCENE_LIVE": 1,
    "TRTC_APP_SCENE_AUDIOCALL": 2,
    "TRTC_APP_SCENE_VOICE_CHATROOM": 3,
}

/**
 * 角色
 * TRTCCloudDef#TRTCRoleAnchor 主播，可以上行视频和音频，一个房间里最多支持50个主播同时上行音视频。
 * TRTCCloudDef#TRTCRoleAudience 观众，只能观看，不能上行视频和音频，一个房间里的观众人数没有上限。
 */
export const Role = {
    "TRTCRoleAnchor": 20,
    "TRTCRoleAudience": 21
}

/**
 * 设置音频路由
 * @type {{TRTC_AUDIO_ROUTE_EARPIECE: 听筒, TRTC_AUDIO_ROUTE_SPEAKER: 扬声器}}
 */
export const AudioRoute = {
    "TRTC_AUDIO_ROUTE_SPEAKER": 0,
    "TRTC_AUDIO_ROUTE_EARPIECE": 1,
}

/**
 *
 * @type {{
 * TRTC_VIDEO_STREAM_TYPE_SMALL: number, 主画面视频流
 * TRTC_VIDEO_STREAM_TYPE_BIG: number, 小画面视频流
 * TRTC_VIDEO_STREAM_TYPE_SUB: number 辅流（屏幕分享）
 * }}
 */
export const VideoStreamType = {
    "TRTC_VIDEO_STREAM_TYPE_BIG": 0,
    "TRTC_VIDEO_STREAM_TYPE_SMALL": 1,
    "TRTC_VIDEO_STREAM_TYPE_SUB": 2,
}

/**
 *
 * @type {{
 * TRTCLocalVideoMirrorType_Disable: number 前置摄像头镜像，后置摄像头不镜像,
 * TRTCLocalVideoMirrorType_Enable: number 前后置摄像头画面均镜像,
 * TRTCLocalVideoMirrorType_Auto: number 前后置摄像头画面均不镜像
 * }}
 */
export const VideoMirrorType = {
    "TRTCLocalVideoMirrorType_Auto": 0,
    "TRTCLocalVideoMirrorType_Enable": 1,
    "TRTCLocalVideoMirrorType_Disable": 2,
}
/**
 *
 * @type {{
 * TRTC_VIDEO_ROTATION_180: number,
 * TRTC_VIDEO_ROTATION_0: number,
 * TRTC_VIDEO_ROTATION_270: number,
 * TRTC_VIDEO_ROTATION_90: number
 * }}
 */
export const VideoRotation = {
    "TRTC_VIDEO_ROTATION_0": 0,
    "TRTC_VIDEO_ROTATION_90": 1,
    "TRTC_VIDEO_ROTATION_180": 2,
    "TRTC_VIDEO_ROTATION_270": 3,
}

/**
 * 重力感应开关
 * @type {{
 * TRTCGSensorMode_UIAutoLayout: number 关闭重力感应，Mac 平台的默认值。
 * TRTCGSensorMode_Disable: number 开启重力感应，iPhone 和 iPad 平台的默认值。
 * }}
 */
export const GSensorMode = {
    "TRTCGSensorMode_Disable": 0,
    "TRTCGSensorMode_UIAutoLayout": 1
}
/**
 *
 * @type {{
 * TRTCAudioQualityDefault: number, 流畅：采样率：16k；单声道；音频裸码率：16kbps；适合语音通话为主的场景，比如在线会议，语音通话
 * TRTCAudioQualitySpeech: number,默认：采样率：48k；单声道；音频裸码率：50kbps；SDK 默认的音频质量，如无特殊需求推荐选择之。
 * TRTCAudioQualityMusic: number}}高音质：采样率：48k；双声道 + 全频带；音频裸码率：128kbps；适合需要高保真传输音乐的场景，比如K歌、音乐直播等。
 */
export const AudioQuality = {
    "TRTCAudioQualitySpeech": 1,
    "TRTCAudioQualityDefault": 2,
    "TRTCAudioQualityMusic": 3
}

/**
 * 系统音量类型（仅适用于移动设备）
 *
 * 现代智能手机中一般都具备两套系统音量类型，即“通话音量”和“媒体音量”。
 * - 通话音量：手机专门为接打电话所设计的音量类型，自带回声抵消（AEC）功能，并且支持通过蓝牙耳机上的麦克风进行拾音，缺点是音质比较一般。
 *            当您通过手机侧面的音量按键下调手机音量时，如果无法将其调至零（也就是无法彻底静音），说明您的手机当前出于通话音量。
 * - 媒体音量：手机专门为音乐场景所设计的音量类型，无法使用系统的 AEC 功能，并且不支持通过蓝牙耳机的麦克风进行拾音，但具备更好的音乐播放效果。
 *            当您通过手机侧面的音量按键下调手机音量时，如果能够将手机音量调至彻底静音，说明您的手机当前出于媒体音量。
 *
 * SDK 目前提供了三种系统音量类型的控制模式：自动切换模式、全程通话音量模式、全程媒体音量模式。
 */
export const SystemVolumeType = {

    ///自动切换模式：
    ///也被称为“麦上通话，麦下媒体”，即主播上麦时使用通话音量，观众不上麦则使用媒体音量，适合在线直播场景。
    "TXSystemVolumeTypeAuto": 0,

    ///全程媒体音量：
    ///通话全程使用媒体音量，并不是非常常用的音量类型，适用于对音质要求比较苛刻的音乐场景中。
    ///如果您的用户大都使用外接设备（比如外接声卡）为主，可以使用该模式，否则请慎用。
    "TXSystemVolumeTypeMedia": 1,

    ///全程通话音量：
    ///该方案的优势在于用户在上下麦时音频模块无需切换工作模式，可以做到无缝上下麦，适合于用户需要频繁上下麦的应用场景。
    "TXSystemVolumeTypeVOIP": 2,
}

/**
 * Log 级别
 * @type {{
 * TRTCLogLevelError: number,输出所有级别的 Log
 * TRTCLogLevelDebug: number,输出 DEBUG，INFO，WARNING，ERROR 和 FATAL 级别的 Log
 * TRTCLogLevelInfo: number,输出 INFO，WARNING，ERROR 和 FATAL 级别的 Log
 * TRTCLogLevelFatal: number,只输出WARNING，ERROR 和 FATAL 级别的 Log
 * TRTCLogLevelNone: number,只输出ERROR 和 FATAL 级别的 Log
 * TRTCLogLevelWarn: number,只输出 FATAL 级别的 Log
 * TRTCLogLevelVerbose: number 不输出任何 SDK Log
 * }}
 */
export const LogLevel = {
    "TRTCLogLevelVerbose": 0,
    "TRTCLogLevelDebug": 1,
    "TRTCLogLevelInfo": 2,
    "TRTCLogLevelWarn": 3,
    "TRTCLogLevelError": 4,
    "TRTCLogLevelFatal": 5,
    "TRTCLogLevelNone": 6
}
