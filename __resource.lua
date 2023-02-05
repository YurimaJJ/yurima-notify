resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

description 'Yurima Notify'

author 'Yurima'

version '1.0.0'

ui_page 'html/ui.html'

client_scripts {
	'client.lua'
}

files {
	'html/*.*'
}

export 'pushNotification'