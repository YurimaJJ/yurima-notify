fx_version 'cerulean'

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

lua54 'yes'