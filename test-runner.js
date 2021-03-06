module.exports = {

  RunTests: function(theTests, setupFunc) {

    let Reset = "\x1b[0m"
    let FgGreen = "\x1b[32m"
    let FgRed = "\x1b[31m"

    let TickMark = "\u2713"
    let CrossMark = "\u2717"

    for (t in theTests) {

      let testName = t.split(/(?=[A-Z])/).join(" ")

      let thisResult = FgGreen + TickMark + " " + Reset + testName
      try {

        let ObjectUnderTest = setupFunc()
        theTests[t](ObjectUnderTest)

      } catch (e) {
        thisResult = FgRed + CrossMark + " " + Reset + testName + ' (' + e + ')'
      }

      console.log(thisResult)

    }

  }

}
