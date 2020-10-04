class Main extends Phaser.Scene {
    constructor() {
        super("main");
    }

    create() {
        let brain1: Phaser.GameObjects.Sprite = new Phaser.GameObjects.Sprite(this, 0, 0, "brain");
        brain1.setPosition(100, 100);
        // brain1.setRotation(180/Math.PI * 45);        //radians
        // brain1.setAngle(90);           //angles
        // brain1.setScale(2);
        // brain1.setVisible(false);
        // brain1.setOrigin(0);

        this.add.existing(brain1);

        let brain2: Phaser.GameObjects.Sprite = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "brain");
    }

}

export { Main }