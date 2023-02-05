function pushNotification(title, message, duration, type)
	SendNUIMessage({
		action = 'open',
		title = title,
		type = type,
		message = message,
		duration = duration,
	})
end

RegisterNetEvent('yurima-notify:pushNotification')
AddEventHandler('yurima-notify:pushNotification', function(title, message, duration, type)
	pushNotification(title, message, duration, type)
end)

-- Command for trying -- Usage "/yurifytest (info/error/success)"
-- Notification Types (info/error/success)

RegisterCommand('yurifytest', function(source, args)
	notificationType = args[1]
	exports['yurima-notify']:pushNotification("Info", "Rosberg beats Hamilton in an equal machine", 5000, notificationType)
end)