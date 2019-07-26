$(document).ready(function () {
    $(".button1").click(function () {
        $(".img1").animate({
            top : "200px"
        },2000,function () {
            $(".img1").animate({
                top : "0"
            },2000);
        });
    
        $(".img2").animate({
            left : "+=620px"
        },2000,function () {
            $(".img2").animate({
                left : "-=620px"
            },2000);
        });
    
        $(".img3").animate({
           
            top: "-=200px",
            left: "+=420px"
    
        },2000, function () {
            $(this).animate({
                top: "+=200px",
                left: "-=420px"
            },2000);
        });
    });
    $(".button2").click(function () {
        $(".img4").slideToggle(3000,function () {
            $(".img5").fadeToggle(2000,function () {
                $(".img6").animate({
                    width: "0",
                    height: "0"
                },3000,function() {
                    $(this).animate({
                        width: "200px",
                        height: "200px"
                    },2000);
                });
            })
        });
    });
    $(".button3").click(function () {
        $(".img7").animate({left: "+=100px",top: "+=100px"},2000).fadeOut(2000).slideIn(2000);
    });
    var arrange = false;
    $(".arrange").click(function () {
        
        if(!arrange) {
            arrange = true;
        $(".grid22").animate({
            top : "+=80px"
        },500,function () {
            $(".grid21").animate({
                top : "+=80px"
            },500,function () {
                $(".grid12").animate({
                    top : "+=80px"
                },500,function () {
                    $(".grid11").animate({
                        top : "+=80px"
                    },500,function () {
                        $(".grid6").animate({
                            left : "-=120px"
                        },500,function () {
                            $(".grid1").animate({
                                left : "-=120px"
                            },500,function () {
                                $(".grid8").animate({
                                    left : "-=120px"
                                },500,function () {
                                    $(".grid3").animate({
                                        left : "-=120px"
                                    },500,function () {
                                        $(".grid5").animate({
                                            top : "-=80px"
                                        },500,function () {
                                            $(".grid10").animate({
                                                left : "+=120px"
                                            },500,function () {
                                                $(".grid4").animate({
                                                    top : "-=80px"
                                                },500,function () {
                                                    $(".grid9").animate({
                                                        left : "+=120px"
                                                    },500,function () {
                                                        $(".grid14").animate({
                                                            top : "-=80px"
                                                        },500,function () {
                                                            $(".grid13").animate({
                                                                top : "-=80px"
                                                            },500,function() {
                                                                $(".grid23").animate({
                                                                    left : "+=120px"
                                                                },500,function () {
                                                                    $(".grid22").animate({
                                                                        left : "+=120px"
                                                                    },500,function () {
                                                                        $(".grid21").animate({
                                                                            top : "+=80px"
                                                                        },500,function () {
                                                                            $(".grid16").animate({
                                                                                left : "-=120px"
                                                                            },500,function () {
                                                                                $(".grid17").animate({
                                                                                    top : "+=80px"
                                                                                },500,function () {
                                                                                    $(".grid12").animate({
                                                                                        left : "+=120px"
                                                                                    },500,function () {
                                                                                        $(".grid11").animate({
                                                                                            top : "+=80px"
                                                                                        },500,function () {
                                                                                            $(".grid6").animate({
                                                                                                top : "+=80px"
                                                                                            },500,function () {
                                                                                                $(".grid1").animate({
                                                                                                    left : "-=120px"
                                                                                                },500,function () {
                                                                                                    $(".grid2").animate({
                                                                                                        top : "-=80px"
                                                                                                    },500,function () {
                                                                                                        $(".grid7").animate({
                                                                                                            left : "-=120px"
                                                                                                        },500,function () {
                                                                                                            $(".grid8").animate({
                                                                                                                top : "+=80px"
                                                                                                            },500,function () {
                                                                                                                $(".grid3").animate({
                                                                                                                    left : "-=120px"
                                                                                                                },500,function () {
                                                                                                                    $(".grid4").animate({
                                                                                                                        top : "-=80px"
                                                                                                                    },500,function () {
                                                                                                                        $(".grid9").animate({
                                                                                                                            top : "-=80px"
                                                                                                                        },500,function () {
                                                                                                                            $(".grid14").animate({
                                                                                                                                left : "+=120px"
                                                                                                                            },500,function () {
                                                                                                                                $(".grid13").animate({
                                                                                                                                    top : "-=80px"
                                                                                                                                },500,function () {
                                                                                                                                    $(".grid18").animate({
                                                                                                                                        left : "-=120px"
                                                                                                                                    },500,function () {
                                                                                                                                        $(".grid19").animate({
                                                                                                                                            top : "-=80px"
                                                                                                                                        },500,function () {
                                                                                                                                            $(".grid24").animate({
                                                                                                                                                left : "-=120px"
                                                                                                                                            },500,function() {
                                                                                                                                                $(".grid25").fadeIn(1000);
                                                                                                                                            });
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });}
    });
})