var chai = require('chai')
var expect = chai.expect
var AudioProcessor = require('../bin/src/AudioProcessor')

describe('AudioProcessor', function() {
    it('splitIntoParts()', function() {
        var timestamps = ["00:15", "00:36"]
        var episode = "ep"
        var template = ["[00:15 - Part 1", "00:36 - Part 2"]

        var audioProcessor = new AudioProcessor(episode, timestamps)

        expect(audioProcessor.generateTemplate(timestamps)).to.equal(template);
    });
});