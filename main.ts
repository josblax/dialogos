namespace StrProp {
    export const Name = StrProp.create()
    export const Text = StrProp.create()
}
function printScript (Name: string, text: string) {
    currentName.setText(Name)
    story.queueStoryPart(function () {
        currentName.setFlag(SpriteFlag.Invisible, false)
        story.printDialog(text, 80, 75, 50, 150)
    })
    story.queueStoryPart(function () {
        currentName.setFlag(SpriteFlag.Invisible, true)
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startScript = createScript("Leon", "Hola mi nombre es Leon")
    printScript(blockObject.getStringProperty(startScript, StrProp.Name), blockObject.getStringProperty(startScript, StrProp.Text))
    startScript = createScript("Leon", "Vengo de un planeta muy.. muy lejano, tanto que el sol no llega ahí")
    printScript(blockObject.getStringProperty(startScript, StrProp.Name), blockObject.getStringProperty(startScript, StrProp.Text))
})
function createScript (characterName: string, text: string) {
    newScript = blockObject.create()
    blockObject.setStringProperty(newScript, StrProp.Name, characterName)
    blockObject.setStringProperty(newScript, StrProp.Text, text)
    return newScript
}
let newScript: blockObject.BlockObject = null
let startScript: blockObject.BlockObject = null
let currentName: TextSprite = null
scene.setBackgroundColor(1)
currentName = textsprite.create("", 1, 15)
currentName.setBorder(1, 6, 1)
currentName.left = 2
currentName.top = 40
currentName.setFlag(SpriteFlag.Invisible, true)
