Yurima Notify 1.0.0

Description:

    - This is a simple notify script to alert people with a title and description.
    - There is three kind of notify, which is success, info and error.

Dependencies:

    - Nope.

Instructions:

    - You need Trigger belowed event or export and specify a title, description and type of alert.

Trigger (Client) Example:

    exports['yurima-notify']:pushNotification("Info", "Rosberg beats Hamilton in an equal machine", 5000, "success")
    exports['yurima-notify']:pushNotification("Info", "Rosberg beats Hamilton in an equal machine", 5000, "info")
    exports['yurima-notify']:pushNotification("Info", "Rosberg beats Hamilton in an equal machine", 5000, "error")

Trigger (Server) Example:

    TriggerClientEvent("yurima-notify", "Info", "Rosberg beats Hamilton in an equal machine", 5000, "success")


Please notify us if there is any issue, bug or vulnerability.
Join our Discord for support and future updates / patch notes: https://discord.gg/hcDYvNvUhr