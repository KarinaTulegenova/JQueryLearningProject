$(function () {
	console.log("jQuery is ready!");

	$("#btnText").on("click", function () {
		$("#demo-id").text("Changed via .text(): Hello from jQuery!");
	});

	$("#btnHtml").on("click", function () {
		$(".demo-class").html("Changed via <strong>.html()</strong> including <em>inline HTML</em>.");
	});

	$("#btnCss").on("click", function () {
		$("p").css({ color: "#a7f3d0", background: "rgba(34,211,238,.06)", padding: "6px", borderRadius: "10px" });
	});

	$("#btnReset1").on("click", function () {
		$("#demo-id").text("This paragraph has id=\"demo-id\".");
		$(".demo-class").text("This paragraph has class=\"demo-class\".");
		$("p").css({ color: "", background: "", padding: "", borderRadius: "" });
	});
	$("#hideP").on("click", function () { $("#vis-p").hide(); });
	$("#showP").on("click", function () { $("#vis-p").show(); });
	$("#toggleP").on("click", function () { $("#vis-p").toggle(); });
	$("#fadeIn").on("click", function () { $("#fadeImg").fadeIn(300); });
	$("#fadeOut").on("click", function () { $("#fadeImg").fadeOut(300); });
	$("#fadeToggle").on("click", function () { $("#fadeImg").fadeToggle(300); });
	$("#fadeReset").on("click", function () { $("#fadeImg").stop(true, true).fadeIn(0); });
	$("#slideDownBtn").on("click", function () { $("#panel").slideDown(250); });
	$("#slideUpBtn").on("click", function () { $("#panel").slideUp(250); });
	$("#slideToggleBtn").on("click", function () { $("#panel").slideToggle(250); });

	let itemCount = 2;
	$("#addItem").on("click", function () {
		itemCount++;
		$("#todo").append(`<li>Appended item ${itemCount}</li>`);
	});
	$("#prependItem").on("click", function () {
		itemCount++;
		$("#todo").prepend(`<li>Prepended item ${itemCount}</li>`);
	});
	$("#removeItem").on("click", function () {
		$("#todo li").last().remove();
		itemCount = Math.max(0, itemCount - 1);
	});

	let toggle = false;
	$("#swapImg").on("click", function () {
		toggle = !toggle;
		const srcA = "data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='400' height='220'><rect width='100%' height='100%' fill='%2322d3ee'/><text x='50%' y='50%' font-size='28' text-anchor='middle' fill='white' dy='.3em'>Image A</text></svg>";
		const srcB = "data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='400' height='220'><rect width='100%' height='100%' fill='%23a78bfa'/><text x='50%' y='50%' font-size='28' text-anchor='middle' fill='white' dy='.3em'>Image B</text></svg>";
		$("#attrImg").attr("src", toggle ? srcB : srcA);
	});

	$("#swapLink").on("click", function () {
		const href = $("#dynamicLink").attr("href");
		const next = href.includes("api.jquery.com") ? "https://www.w3schools.com/jquery/" : "https://api.jquery.com";
		$("#dynamicLink").attr("href", next).text(next.includes("w3schools") ? "Visit W3Schools jQuery" : "Visit jQuery API");
	});

	$("#nameInput, #emailInput").on("input", function () {
		$("#liveName").text("Name: " + $("#nameInput").val());
		$("#liveEmail").text("Email: " + $("#emailInput").val());
	});

	const $basic = $("#basicBox");
	$("#animateBasic").on("click", function () {
		$basic.stop(true).animate({ left: "+=120", width: 140, height: 140 }, 400);
	});
	$("#resetBasic").on("click", function () {
		$basic.stop(true, true).animate({ left: 0, top: 0, width: 80, height: 80 }, 0);
	});

	const $seq = $("#seqBox");
	$("#animateSequence").on("click", function () {
		$seq.stop(true, true)
			.animate({ left: "+=160" }, 300)
			.animate({ top: "+=80" }, 300)
			.animate({ width: 50, height: 50 }, 300)
			.animate({ left: 0, top: 0, width: 80, height: 80 }, 300);
	});
	$("#resetSequence").on("click", function () {
		$seq.stop(true, true).css({ left: 0, top: 0, width: 80, height: 80 });
	});

	const $combo = $("#comboBox");
	$("#animateCombined").on("click", function () {
		$combo.stop(true).animate({ left: "+=140", top: "+=20", width: 120, height: 120, opacity: 0.35 }, 450);
	});
	$("#resetCombined").on("click", function () {
		$combo.stop(true, true).animate({ left: 0, top: 0, width: 80, height: 80, opacity: 1 }, 0);
	});

	const $modal = $("#modal"), $modalImg = $("#modalImg");

	$("#gallery .thumb img").on("mouseenter", function () { $(this).stop(true).fadeTo(150, 0.7); })
		.on("mouseleave", function () { $(this).stop(true).fadeTo(150, 1); });

	$("#gallery .thumb").on("click", function () {
		const src = $(this).find("img").attr("src");
		$modalImg.attr("src", src);
		$modal.fadeIn(180);
	});

	$("#closeModal, #modal").on("click", function (e) {
		if (e.target.id === "closeModal" || e.target.id === "modal") {
			$modal.fadeOut(180);
		}
	});
});
