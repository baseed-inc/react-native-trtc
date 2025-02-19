require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name             = 'RNTRTC'
  s.version          = package['version']
  s.summary          = package['description']
  s.license          = package['license']
  s.homepage         = package['homepage']
  s.authors          = package['author']
  s.platform         = :ios, "9.0"
  s.source           = { :git => 'git@github.com:baseed-inc/react-native-trtc.git', :tag => "v#{s.version}" }
  s.source_files     = 'ios/**/*.{h,m}'
  s.requires_arc     = true
  s.dependency         'React'
  s.dependency "TXLiteAVSDK_TRTC", "9.2.10637"
end
