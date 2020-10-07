var myAngApp = angular.module('carServiceApp',[]);
myAngApp.controller('carServiceController',function ($scope, $http,  $compile) {

$scope.carServiceDetailArray=[];

function resetAllFields(){
    $scope.cName = null;
    $scope.cPhoneNumber = null;
    $scope.cEmail = null;
    $scope.VRN = null;
    $scope.carBrand = null;
    $scope.carModel = null;
    $scope.fType = null;
    $scope.serviceDate = null;
    document.getElementById("serviceTime").value='';
    $scope.autoPickUp = null;
}
$scope.bookService=function(){
    $scope.carServiceObjectArray={};
    if($scope.cName==null){
        alert('Customer name is mandatory');
    }
    else if($scope.VRN==null){
        alert('Registration number is mandatory');
    }
    else if($scope.carBrand==null){
        alert('Car brand is mandatory');
    }
    else if($scope.carModel==null){
        alert('Car model is mandatory');
    }
    else if($scope.fType==null){
        alert('Fuel is mandatory');
    }
    else if($scope.serviceDate==null || document.getElementById("serviceTime").value ==null){
        alert('Date and time is mandatory');
    }
    else{
        if(confirm('Are you sure to book the service ?')){
            $scope.carServiceObjectArray["customerName"] = $scope.cName;
            $scope.carServiceObjectArray["customerPhoneNumber"] = $scope.cPhoneNumber;
            $scope.carServiceObjectArray["customerEmail"] = $scope.cEmail;
            $scope.carServiceObjectArray["customerVehicleNumber"] = $scope.VRN;
            $scope.carServiceObjectArray["customerCarBrand"] = $scope.carBrand;
            $scope.carServiceObjectArray["customerCarModel"] = $scope.carModel;
            $scope.carServiceObjectArray["carFuelType"] = $scope.fType;
            $scope.carServiceObjectArray["pickUpDate"] = $scope.serviceDate;
            $scope.carServiceObjectArray["pickUpTime"] = document.getElementById("serviceTime").value;
            $scope.carServiceObjectArray["autoPickUp"] = $scope.autoPickUp;
            if($scope.carServiceDetailArray.push($scope.carServiceObjectArray)){
                alert('Service booking done successfully.');
                resetAllFields();
                document.getElementById("mainForm").reset();
            }

        }
    }
}

$scope.deleteRow=function(obj){
    $scope.carServiceDetailArray=$scope.carServiceDetailArray.filter(function(el){
        return el.customerVehicleNumber != obj.customerVehicleNumber
    })
}

});