class CarTransportService {
    transportTo() {
        console.log("by car");
    }
}

class PlaceTransportService {
    transportTo() {
        console.log("by plane");
    }
}

module.exports.Service = PlaceTransportService;
// module.exports.Service1 = CarTransportService;