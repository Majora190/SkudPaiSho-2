
Trifle.BrainFactory = function() {

}

Trifle.BrainFactory.prototype.createTriggerBrain = function(abilityTrigger, board) {
    switch(abilityTrigger) {
        case Trifle.AbilityTrigger.whileInsideTemple:
            return new Trifle.WhileInsideTempleAbilityTriggerBrain(board);
        case Trifle.AbilityTrigger.whileOutsideTemple:
            return new Trifle.WhileOutsideTempleAbilityTriggerBrain(board);
        case Trifle.AbilityTrigger.whenTileLandsInZone:
            return new Trifle.WhenTileLandsInZoneAbilityTriggerBrain(board);
    }
};

// TODO - this wrong? These are triggering actions???
Trifle.BrainFactory.prototype.createAbilityBrain = function(abilityTrigger, board) {
    switch(abilityTrigger) {
        case Trifle.AbilityTrigger.whenCaptured:
            return new Trifle.WhenCapturedAbilityTriggerBrain(board);
        case Trifle.AbilityTrigger.whenCapturing:
            return new Trifle.WhenCapturingAbilityTriggerBrain(board);
    }
};
