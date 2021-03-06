
Trifle.CaptureTargetTilesAbilityBrain = function(abilityObject) {
	this.abilityObject = abilityObject;
}

Trifle.CaptureTargetTilesAbilityBrain.prototype.activateAbility = function() {
	var targetTilePoints = this.abilityObject.abilityTargetTilePoints;

	this.capturedTiles = [];

	var self = this;
	if (targetTilePoints && targetTilePoints.length > 0) {
		targetTilePoints.forEach(function(targetTilePoint) {
			if (self.abilityObject.board.capturePossibleBasedOnBannersPlayed(self.abilityObject.sourceTile.ownerName, targetTilePoint)) {
				var capturedTile = self.abilityObject.board.captureTileOnPoint(targetTilePoint);
				self.capturedTiles.push(capturedTile);
			}
		});
	}

	if (this.capturedTiles.length > 0) {
		this.abilityObject.boardChanged = true;
	}
};
