//answer1,answer2,answer3,answer4,btTraloi,btDungLai,btSanSang,btTiepTuc,btHenGapLai,btNhanSao,btHelp1,btHelp2,btHelp3,btHelp4,btTroGiupOK,btTiepTucChucMung,btIntroHuongDanLamBai,btBatDauLamBai,btBangXepHang,btThoat,btIntroQuayLai,btIntroBatDau,btThoatBangXepHang,sound਍瘀愀爀 氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀 ਍瘀愀爀 琀洀瀀吀愀爀最攀琀 㬀 ਍瘀愀爀 开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀㴀∀∀㬀ഀ
var tabTarget= undefined;਍瘀愀爀 氀漀挀欀䌀栀漀漀猀攀 㴀 昀愀氀猀攀㬀 ਍␀⠀搀漀挀甀洀攀渀琀⤀⸀爀攀愀搀礀⠀昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    ␀⠀∀⌀戀漀搀礀䤀䐀∀⤀⸀洀漀甀猀攀甀瀀⠀昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
		if(lockChoose) return;ഀ
		if(lockHover && detectmob() != 1 && detectmob() != 3){ഀ
			setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);ഀ
			lockHover = false;ഀ
		}ഀ
		if (event.which == 3 || event.which == 2) {ഀ
            return;ഀ
        }ഀ
		ഀ
		if(tabTarget != undefined){ഀ
			if(!$(tabTarget).is("input")){ഀ
				$(tabTarget).hide();ഀ
				$("#"+tabTarget[0].id.replace("tab","hover")).hide();ഀ
			}ഀ
			tabTarget = undefined;ഀ
		}ഀ
		ഀ
    });ഀ
	ഀ
    $("#bodyID").mousedown(function() {ഀ
		if (event.which == 3 || event.which == 2 || lockChoose) return;ഀ
		lockHover = true;ഀ
    });ഀ
	ഀ
	/* ഀ
		uncomment if use interactഀ
	*/ഀ
	// if(isIE11){ഀ
		// document.addEventListener("MSPointerUp",function(){ഀ
			// interact.stop();ഀ
		// });ഀ
	// }ഀ
});ഀ
ഀ
var getIdButton= function(_id){ഀ
	if(_id==undefined) return "";ഀ
	return _id.replace("_event","");ഀ
}ഀ
ഀ
var setHoverButton = function(_hover, _bool){਍ऀ椀昀⠀␀⠀开栀漀瘀攀爀⤀⸀愀琀琀爀⠀∀挀栀漀漀猀攀∀⤀ 㴀㴀 ∀琀爀甀攀∀⤀ 爀攀琀甀爀渀㬀 ਍ऀ椀昀⠀开戀漀漀氀⤀笀 ਍ऀऀ␀⠀∀⌀戀漀搀礀䤀䐀∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀瀀漀椀渀琀攀爀∀⤀㬀 ਍ऀऀ␀⠀开栀漀瘀攀爀⤀⸀猀栀漀眀⠀⤀㬀 ਍ऀ紀 攀氀猀攀 笀 ਍ऀऀ␀⠀∀⌀戀漀搀礀䤀䐀∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀搀攀昀愀甀氀琀∀⤀㬀 ਍ऀऀ␀⠀开栀漀瘀攀爀⤀⸀栀椀搀攀⠀⤀㬀 ਍ऀ紀 ਍紀ഀ
਍ഀ
਍昀甀渀挀琀椀漀渀 挀栀漀漀猀攀䄀渀猀眀攀爀⠀开椀搀⤀笀ഀ
	if(lockChoose) return;਍ऀ␀⠀∀⸀戀甀琀琀漀渀䄀渀猀眀攀爀∀⤀⸀愀琀琀爀⠀∀挀栀漀漀猀攀∀Ⰰ∀昀愀氀猀攀∀⤀㬀ഀ
	$(".buttonAnswer").hide();਍ऀ␀⠀∀⌀∀⬀开椀搀⤀⸀愀琀琀爀⠀∀挀栀漀漀猀攀∀Ⰰ∀琀爀甀攀∀⤀㬀ഀ
	$("#"+_id).show();਍紀ഀ
਍昀甀渀挀琀椀漀渀 最攀琀䄀渀猀眀攀爀⠀开椀搀⤀笀ഀ
	switch(_id){਍ऀऀ挀愀猀攀 ∀愀渀猀眀攀爀㄀开栀漀瘀攀爀∀ 㨀 爀攀琀甀爀渀 　㬀ഀ
		case "answer2_hover" : return 1;਍ऀऀ挀愀猀攀 ∀愀渀猀眀攀爀㌀开栀漀瘀攀爀∀ 㨀 爀攀琀甀爀渀 ㈀㬀ഀ
		case "answer4_hover" : return 3;਍ऀऀ搀攀昀愀甀氀琀 㨀 爀攀琀甀爀渀 ∀䔀∀㬀ഀ
	}਍紀 ਍ ਍ഀ
//=======================================================ഀ
var answer1Click = function(event) {ഀ
    try {ഀ
        if (detectmob() != 1 && detectmob() != 3)ഀ
            if (event.which == 3 || event.which == 2) {ഀ
                return;ഀ
            }ഀ
    } catch (error) {}ഀ
	if(event != undefined)ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);ഀ
	// write code below here਍ऀ挀栀漀漀猀攀䄀渀猀眀攀爀⠀∀愀渀猀眀攀爀㄀开栀漀瘀攀爀∀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㄀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍    琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㄀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㄀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㄀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㄀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㄀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ紀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀伀甀琀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㄀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀 ਍ऀ琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ爀攀洀漀瘀攀䄀渀猀眀攀爀㄀䔀瘀攀渀琀⠀⤀㬀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀 ਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀 ਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀 ਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀 ਍ऀऀऀ爀攀琀甀爀渀㬀 ਍ऀऀ紀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㄀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ紀 ਍紀 ਍ ਍瘀愀爀 愀搀搀䄀渀猀眀攀爀㄀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀伀瘀攀爀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 爀攀洀漀瘀攀䄀渀猀眀攀爀㄀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㄀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㄀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㄀䴀漀甀猀攀伀甀琀⤀㬀 ਍紀 ਍ ਍愀搀搀䄀渀猀眀攀爀㄀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================ഀ
var answer2Click = function(event) {ഀ
    try {ഀ
        if (detectmob() != 1 && detectmob() != 3)ഀ
            if (event.which == 3 || event.which == 2) {ഀ
                return;ഀ
            }ഀ
    } catch (error) {}ഀ
	if(event != undefined)ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);ഀ
	// write code below here਍ऀ挀栀漀漀猀攀䄀渀猀眀攀爀⠀∀愀渀猀眀攀爀㈀开栀漀瘀攀爀∀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㈀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍    琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㈀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㈀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㈀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㈀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㈀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ紀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀伀甀琀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㈀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀 ਍ऀ琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ爀攀洀漀瘀攀䄀渀猀眀攀爀㈀䔀瘀攀渀琀⠀⤀㬀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀 ਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀 ਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀 ਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀 ਍ऀऀऀ爀攀琀甀爀渀㬀 ਍ऀऀ紀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㈀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ紀 ਍紀 ਍ ਍瘀愀爀 愀搀搀䄀渀猀眀攀爀㈀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀伀瘀攀爀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 爀攀洀漀瘀攀䄀渀猀眀攀爀㈀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㈀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㈀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㈀䴀漀甀猀攀伀甀琀⤀㬀 ਍紀 ਍ ਍愀搀搀䄀渀猀眀攀爀㈀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================ഀ
var answer3Click = function(event) {ഀ
    try {ഀ
        if (detectmob() != 1 && detectmob() != 3)ഀ
            if (event.which == 3 || event.which == 2) {ഀ
                return;ഀ
            }ഀ
    } catch (error) {}ഀ
	if(event != undefined)ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);ഀ
	// write code below here਍ऀ挀栀漀漀猀攀䄀渀猀眀攀爀⠀∀愀渀猀眀攀爀㌀开栀漀瘀攀爀∀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㌀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍    琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㌀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㌀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㌀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㌀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㌀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ紀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀伀甀琀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㌀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀 ਍ऀ琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ爀攀洀漀瘀攀䄀渀猀眀攀爀㌀䔀瘀攀渀琀⠀⤀㬀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀 ਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀 ਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀 ਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀 ਍ऀऀऀ爀攀琀甀爀渀㬀 ਍ऀऀ紀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㌀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ紀 ਍紀 ਍ ਍瘀愀爀 愀搀搀䄀渀猀眀攀爀㌀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀伀瘀攀爀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 爀攀洀漀瘀攀䄀渀猀眀攀爀㌀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㌀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㌀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㌀䴀漀甀猀攀伀甀琀⤀㬀 ਍紀 ਍ ਍愀搀搀䄀渀猀眀攀爀㌀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================ഀ
var answer4Click = function(event) {ഀ
    try {ഀ
        if (detectmob() != 1 && detectmob() != 3)ഀ
            if (event.which == 3 || event.which == 2) {ഀ
                return;ഀ
            }ഀ
    } catch (error) {}ഀ
	if(event != undefined)ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);ഀ
	// write code below here਍ऀ挀栀漀漀猀攀䄀渀猀眀攀爀⠀∀愀渀猀眀攀爀㐀开栀漀瘀攀爀∀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㐀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍    琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㐀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㐀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㐀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㐀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㐀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀 ਍ऀ紀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀伀甀琀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍紀 ਍ ਍瘀愀爀 愀渀猀眀攀爀㐀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀 ਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀 ਍ऀ琀爀礀 笀 ਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ ਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀 ਍                爀攀琀甀爀渀㬀 ਍            紀 ਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀 ਍ऀ爀攀洀漀瘀攀䄀渀猀眀攀爀㐀䔀瘀攀渀琀⠀⤀㬀 ਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀 ਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀 ਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀 ਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀 ਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀 ਍ऀऀऀ爀攀琀甀爀渀㬀 ਍ऀऀ紀 ਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀愀渀猀眀攀爀㐀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀 ਍ऀ紀 ਍紀 ਍ ਍瘀愀爀 愀搀搀䄀渀猀眀攀爀㐀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀伀瘀攀爀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀䐀漀眀渀⤀㬀 ਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀唀瀀⤀㬀 ਍紀 ਍ ਍瘀愀爀 爀攀洀漀瘀攀䄀渀猀眀攀爀㐀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 愀渀猀眀攀爀㐀䌀氀椀挀欀⤀㬀 ਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀愀渀猀眀攀爀㐀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 愀渀猀眀攀爀㐀䴀漀甀猀攀伀甀琀⤀㬀 ਍紀 ਍ ਍愀搀搀䄀渀猀眀攀爀㐀䔀瘀攀渀琀⠀⤀㬀ഀ
਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btTraloiClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	var _answerID = getAnswer($("polygon[choose='true']").attr("id"));਍ऀ⼀⼀椀昀⠀ 开愀渀猀眀攀爀䤀䐀㴀㴀 ∀䔀∀ ⤀ 爀攀琀甀爀渀㬀ഀ
	tmpQ.answer(_answerID);਍紀ഀ
਍瘀愀爀 戀琀吀爀愀氀漀椀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btTraloi_event").addEventListener("click", btTraloiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀愀氀漀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀爀愀氀漀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btTraloiMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btTraloi_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btTraloiMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btTraloi_hover",true);਍ऀ紀ഀ
	document.getElementById("btTraloi_event").addEventListener("mouseout", btTraloiMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀愀氀漀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀爀愀氀漀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btTraloiMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtTraloiEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btTraloi_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtTraloiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀愀氀漀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀吀爀愀氀漀椀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btTraloi_event").addEventListener("mousedown", btTraloiMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀愀氀漀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀爀愀氀漀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtTraloiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀愀氀漀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀爀愀氀漀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btTraloi_event").removeEventListener("mouseout", btTraloiMouseOut);਍紀ഀ
਍愀搀搀䈀琀吀爀愀氀漀椀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀䐀甀渀最䰀愀椀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀഀ
	tmpQ.stop();਍紀ഀ
਍瘀愀爀 戀琀䐀甀渀最䰀愀椀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btDungLai_event").addEventListener("click", btDungLaiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䐀甀渀最䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䐀甀渀最䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btDungLaiMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btDungLai_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btDungLaiMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btDungLai_hover",true);਍ऀ紀ഀ
	document.getElementById("btDungLai_event").addEventListener("mouseout", btDungLaiMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䐀甀渀最䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䐀甀渀最䰀愀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btDungLaiMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtDungLaiEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btDungLai_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtDungLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䐀甀渀最䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䐀甀渀最䰀愀椀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btDungLai_event").addEventListener("mousedown", btDungLaiMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䐀甀渀最䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䐀甀渀最䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtDungLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䐀甀渀最䰀愀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䐀甀渀最䰀愀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btDungLai_event").removeEventListener("mouseout", btDungLaiMouseOut);਍紀ഀ
਍愀搀搀䈀琀䐀甀渀最䰀愀椀䔀瘀攀渀琀⠀⤀㬀ഀ
਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btSanSangClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.show();਍紀ഀ
਍瘀愀爀 戀琀匀愀渀匀愀渀最䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btSanSang_event").addEventListener("click", btSanSangClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀匀愀渀匀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀匀愀渀匀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btSanSangMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btSanSang_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btSanSangMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btSanSang_hover",true);਍ऀ紀ഀ
	document.getElementById("btSanSang_event").addEventListener("mouseout", btSanSangMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀匀愀渀匀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀匀愀渀匀愀渀最䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btSanSangMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtSanSangEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btSanSang_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtSanSangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀匀愀渀匀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀匀愀渀匀愀渀最䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btSanSang_event").addEventListener("mousedown", btSanSangMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀匀愀渀匀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀匀愀渀匀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtSanSangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀匀愀渀匀愀渀最开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀匀愀渀匀愀渀最䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btSanSang_event").removeEventListener("mouseout", btSanSangMouseOut);਍紀ഀ
਍愀搀搀䈀琀匀愀渀匀愀渀最䔀瘀攀渀琀⠀⤀㬀ഀ
਍瘀愀爀 戀琀吀椀攀瀀吀甀挀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ琀洀瀀儀⸀渀攀砀琀⠀⤀㬀ഀ
}਍ഀ
var btTiepTucMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btTiepTuc_event").addEventListener("mouseup", btTiepTucMouseUp);਍紀ഀ
਍瘀愀爀 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀吀椀攀瀀吀甀挀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀吀椀攀瀀吀甀挀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btTiepTuc_event").addEventListener("mousedown", btTiepTucMouseDown);਍紀ഀ
਍瘀愀爀 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀吀椀攀瀀吀甀挀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀吀椀攀瀀吀甀挀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀吀椀攀瀀吀甀挀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btTiepTuc_event").addEventListener("mouseover", btTiepTucMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btTiepTuc_event").addEventListener("mouseup", btTiepTucMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀吀椀攀瀀吀甀挀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btTiepTuc_event").removeEventListener("click", btTiepTucClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtTiepTucEvent();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btHenGapLaiClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.stop("auto");਍紀ഀ
਍瘀愀爀 戀琀䠀攀渀䜀愀瀀䰀愀椀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btHenGapLai_event").addEventListener("click", btHenGapLaiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀渀䜀愀瀀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀渀䜀愀瀀䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btHenGapLaiMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btHenGapLai_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btHenGapLaiMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btHenGapLai_hover",true);਍ऀ紀ഀ
	document.getElementById("btHenGapLai_event").addEventListener("mouseout", btHenGapLaiMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀渀䜀愀瀀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䠀攀渀䜀愀瀀䰀愀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btHenGapLaiMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtHenGapLaiEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btHenGapLai_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtHenGapLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀渀䜀愀瀀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䠀攀渀䜀愀瀀䰀愀椀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btHenGapLai_event").addEventListener("mousedown", btHenGapLaiMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀渀䜀愀瀀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀渀䜀愀瀀䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtHenGapLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀渀䜀愀瀀䰀愀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䠀攀渀䜀愀瀀䰀愀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btHenGapLai_event").removeEventListener("mouseout", btHenGapLaiMouseOut);਍紀ഀ
਍愀搀搀䈀琀䠀攀渀䜀愀瀀䰀愀椀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀一栀愀渀匀愀漀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ猀栀漀眀䈀愀渀最堀攀瀀䠀愀渀最⠀⤀㬀ഀ
}਍ഀ
var btNhanSaoMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀一栀愀渀匀愀漀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀一栀愀渀匀愀漀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btNhanSao_event").addEventListener("mouseup", btNhanSaoMouseUp);਍紀ഀ
਍瘀愀爀 戀琀一栀愀渀匀愀漀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀一栀愀渀匀愀漀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀一栀愀渀匀愀漀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀一栀愀渀匀愀漀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀一栀愀渀匀愀漀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀一栀愀渀匀愀漀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btNhanSao_event").addEventListener("mousedown", btNhanSaoMouseDown);਍紀ഀ
਍瘀愀爀 戀琀一栀愀渀匀愀漀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀一栀愀渀匀愀漀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀一栀愀渀匀愀漀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀一栀愀渀匀愀漀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btNhanSao_event").addEventListener("mouseover", btNhanSaoMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀一栀愀渀匀愀漀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀一栀愀渀匀愀漀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btNhanSao_event").addEventListener("mouseup", btNhanSaoMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀一栀愀渀匀愀漀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btNhanSao_event").removeEventListener("click", btNhanSaoClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀一栀愀渀匀愀漀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀一栀愀渀匀愀漀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtNhanSaoEvent();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btHelp1Click = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.useHelp(1);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㄀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btHelp1_event").addEventListener("click", btHelp1Click);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀氀瀀㄀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btHelp1MouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btHelp1_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btHelp1MouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btHelp1_hover",true);਍ऀ紀ഀ
	document.getElementById("btHelp1_event").addEventListener("mouseout", btHelp1MouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䠀攀氀瀀㄀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btHelp1MouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtHelp1Event();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btHelp1_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtHelp1Event = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䠀攀氀瀀㄀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btHelp1_event").addEventListener("mousedown", btHelp1MouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㄀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀氀瀀㄀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtHelp1Event = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㄀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䠀攀氀瀀㄀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btHelp1_event").removeEventListener("mouseout", btHelp1MouseOut);਍紀ഀ
਍愀搀搀䈀琀䠀攀氀瀀㄀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀䠀攀氀瀀㈀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ琀洀瀀儀⸀甀猀攀䠀攀氀瀀⠀㈀⤀㬀ഀ
}਍ഀ
var btHelp2MouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䠀攀氀瀀㈀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btHelp2_event").addEventListener("mouseup", btHelp2MouseUp);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㈀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㈀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㈀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㈀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䠀攀氀瀀㈀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btHelp2_event").addEventListener("mousedown", btHelp2MouseDown);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㈀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀䠀攀氀瀀㈀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㈀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀䠀攀氀瀀㈀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btHelp2_event").addEventListener("mouseover", btHelp2MouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㈀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䠀攀氀瀀㈀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btHelp2_event").addEventListener("mouseup", btHelp2MouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀䠀攀氀瀀㈀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btHelp2_event").removeEventListener("click", btHelp2Click);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㈀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䠀攀氀瀀㈀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtHelp2Event();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btHelp3Click = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.useHelp(3);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㌀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btHelp3_event").addEventListener("click", btHelp3Click);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀氀瀀㌀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btHelp3MouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btHelp3_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btHelp3MouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btHelp3_hover",true);਍ऀ紀ഀ
	document.getElementById("btHelp3_event").addEventListener("mouseout", btHelp3MouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䠀攀氀瀀㌀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btHelp3MouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtHelp3Event();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btHelp3_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtHelp3Event = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䠀攀氀瀀㌀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btHelp3_event").addEventListener("mousedown", btHelp3MouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㌀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䠀攀氀瀀㌀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtHelp3Event = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㌀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䠀攀氀瀀㌀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btHelp3_event").removeEventListener("mouseout", btHelp3MouseOut);਍紀ഀ
਍愀搀搀䈀琀䠀攀氀瀀㌀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀䠀攀氀瀀㐀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ琀洀瀀儀⸀甀猀攀䠀攀氀瀀⠀㐀⤀㬀ഀ
}਍ഀ
var btHelp4MouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䠀攀氀瀀㐀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btHelp4_event").addEventListener("mouseup", btHelp4MouseUp);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㐀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㐀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㐀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㐀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䠀攀氀瀀㐀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btHelp4_event").addEventListener("mousedown", btHelp4MouseDown);਍紀ഀ
਍瘀愀爀 戀琀䠀攀氀瀀㐀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀䠀攀氀瀀㐀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䠀攀氀瀀㐀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀䠀攀氀瀀㐀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btHelp4_event").addEventListener("mouseover", btHelp4MouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㐀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䠀攀氀瀀㐀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btHelp4_event").addEventListener("mouseup", btHelp4MouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀䠀攀氀瀀㐀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btHelp4_event").removeEventListener("click", btHelp4Click);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䠀攀氀瀀㐀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䠀攀氀瀀㐀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtHelp4Event();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btTroGiupOKClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.useHelpOK();਍紀ഀ
਍瘀愀爀 戀琀吀爀漀䜀椀甀瀀伀䬀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btTroGiupOK_event").addEventListener("click", btTroGiupOKClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀漀䜀椀甀瀀伀䬀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀爀漀䜀椀甀瀀伀䬀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btTroGiupOKMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btTroGiupOK_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btTroGiupOKMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btTroGiupOK_hover",true);਍ऀ紀ഀ
	document.getElementById("btTroGiupOK_event").addEventListener("mouseout", btTroGiupOKMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀漀䜀椀甀瀀伀䬀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀爀漀䜀椀甀瀀伀䬀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btTroGiupOKMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtTroGiupOKEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btTroGiupOK_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtTroGiupOKEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀漀䜀椀甀瀀伀䬀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀吀爀漀䜀椀甀瀀伀䬀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btTroGiupOK_event").addEventListener("mousedown", btTroGiupOKMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀漀䜀椀甀瀀伀䬀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀爀漀䜀椀甀瀀伀䬀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtTroGiupOKEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀爀漀䜀椀甀瀀伀䬀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀爀漀䜀椀甀瀀伀䬀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btTroGiupOK_event").removeEventListener("mouseout", btTroGiupOKMouseOut);਍紀ഀ
਍愀搀搀䈀琀吀爀漀䜀椀甀瀀伀䬀䔀瘀攀渀琀⠀⤀㬀ഀ
਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btTiepTucChucMungClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	tmpQ.nextWithNoShowStar();਍紀ഀ
਍瘀愀爀 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btTiepTucChucMung_event").addEventListener("click", btTiepTucChucMungClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btTiepTucChucMungMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btTiepTucChucMung_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btTiepTucChucMungMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btTiepTucChucMung_hover",true);਍ऀ紀ഀ
	document.getElementById("btTiepTucChucMung_event").addEventListener("mouseout", btTiepTucChucMungMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btTiepTucChucMungMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtTiepTucChucMungEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btTiepTucChucMung_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtTiepTucChucMungEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btTiepTucChucMung_event").addEventListener("mousedown", btTiepTucChucMungMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtTiepTucChucMungEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btTiepTucChucMung_event").removeEventListener("mouseout", btTiepTucChucMungMouseOut);਍紀ഀ
਍愀搀搀䈀琀吀椀攀瀀吀甀挀䌀栀甀挀䴀甀渀最䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ␀⠀∀⌀椀渀琀爀漀㄀∀⤀⸀栀椀搀攀⠀⤀㬀ഀ
	$("#bangxephang").show();਍ऀ␀⠀∀⌀栀甀漀渀最搀愀渀氀愀洀戀愀椀∀⤀⸀猀栀漀眀⠀⤀㬀ഀ
	$("#divtrogiup_div").show();਍ऀ␀⠀∀⌀最爀漀甀瀀砀攀瀀栀愀渀最∀⤀⸀栀椀搀攀⠀⤀㬀ഀ
}਍ഀ
var btIntroHuongDanLamBaiMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btIntroHuongDanLamBai_event").addEventListener("mouseup", btIntroHuongDanLamBaiMouseUp);਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btIntroHuongDanLamBai_event").addEventListener("mousedown", btIntroHuongDanLamBaiMouseDown);਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btIntroHuongDanLamBai_event").addEventListener("mouseover", btIntroHuongDanLamBaiMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btIntroHuongDanLamBai_event").addEventListener("mouseup", btIntroHuongDanLamBaiMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btIntroHuongDanLamBai_event").removeEventListener("click", btIntroHuongDanLamBaiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䤀渀琀爀漀䠀甀漀渀最䐀愀渀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtIntroHuongDanLamBaiEvent();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btBatDauLamBaiClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	startFunc();਍ऀഀ
}਍ഀ
var btBatDauLamBaiMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btBatDauLamBai_event").addEventListener("mouseup", btBatDauLamBaiMouseUp);਍紀ഀ
਍瘀愀爀 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btBatDauLamBai_event").addEventListener("mousedown", btBatDauLamBaiMouseDown);਍紀ഀ
਍瘀愀爀 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btBatDauLamBai_event").addEventListener("mouseover", btBatDauLamBaiMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btBatDauLamBai_event").addEventListener("mouseup", btBatDauLamBaiMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btBatDauLamBai_event").removeEventListener("click", btBatDauLamBaiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䈀愀琀䐀愀甀䰀愀洀䈀愀椀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtBatDauLamBaiEvent();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btBangXepHangClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	$("#intro1").hide();਍ऀ␀⠀∀⌀戀愀渀最砀攀瀀栀愀渀最∀⤀⸀猀栀漀眀⠀⤀㬀ഀ
	$("#huongdanlambai").hide();਍ऀ␀⠀∀⌀最爀漀甀瀀砀攀瀀栀愀渀最∀⤀⸀猀栀漀眀⠀⤀㬀ഀ
	loadBangXepHang();਍紀ഀ
਍瘀愀爀 戀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btBangXepHang_event").addEventListener("click", btBangXepHangClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btBangXepHangMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btBangXepHang_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btBangXepHangMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btBangXepHang_hover",true);਍ऀ紀ഀ
	document.getElementById("btBangXepHang_event").addEventListener("mouseout", btBangXepHangMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btBangXepHangMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtBangXepHangEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btBangXepHang_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtBangXepHangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btBangXepHang_event").addEventListener("mousedown", btBangXepHangMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtBangXepHangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䈀愀渀最堀攀瀀䠀愀渀最䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btBangXepHang_event").removeEventListener("mouseout", btBangXepHangMouseOut);਍紀ഀ
਍愀搀搀䈀琀䈀愀渀最堀攀瀀䠀愀渀最䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀吀栀漀愀琀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍紀ഀ
਍瘀愀爀 戀琀吀栀漀愀琀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btThoat_event").addEventListener("click", btThoatClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀栀漀愀琀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btThoatMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btThoat_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btThoatMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btThoat_hover",true);਍ऀ紀ഀ
	document.getElementById("btThoat_event").addEventListener("mouseout", btThoatMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀栀漀愀琀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btThoatMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtThoatEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btThoat_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtThoatEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀吀栀漀愀琀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btThoat_event").addEventListener("mousedown", btThoatMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀栀漀愀琀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtThoatEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀栀漀愀琀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btThoat_event").removeEventListener("mouseout", btThoatMouseOut);਍紀ഀ
਍愀搀搀䈀琀吀栀漀愀琀䔀瘀攀渀琀⠀⤀㬀ഀ
਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btIntroQuayLaiClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	$("#intro1").show();਍ऀ␀⠀∀⌀戀愀渀最砀攀瀀栀愀渀最∀⤀⸀栀椀搀攀⠀⤀㬀ഀ
	$(".mydiv").hide();਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btIntroQuayLai_event").addEventListener("click", btIntroQuayLaiClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btIntroQuayLaiMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btIntroQuayLai_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btIntroQuayLaiMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btIntroQuayLai_hover",true);਍ऀ紀ഀ
	document.getElementById("btIntroQuayLai_event").addEventListener("mouseout", btIntroQuayLaiMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btIntroQuayLaiMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtIntroQuayLaiEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btIntroQuayLai_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtIntroQuayLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btIntroQuayLai_event").addEventListener("mousedown", btIntroQuayLaiMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtIntroQuayLaiEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btIntroQuayLai_event").removeEventListener("mouseout", btIntroQuayLaiMouseOut);਍紀ഀ
਍愀搀搀䈀琀䤀渀琀爀漀儀甀愀礀䰀愀椀䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ猀琀愀爀琀䘀甀渀挀⠀⤀㬀ഀ
}਍ഀ
var btIntroBatDauMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btIntroBatDau_event").addEventListener("mouseup", btIntroBatDauMouseUp);਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("btIntroBatDau_event").addEventListener("mousedown", btIntroBatDauMouseDown);਍紀ഀ
਍瘀愀爀 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀䈀琀䤀渀琀爀漀䈀愀琀䐀愀甀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀䈀琀䤀渀琀爀漀䈀愀琀䐀愀甀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btIntroBatDau_event").addEventListener("mouseover", btIntroBatDauMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("btIntroBatDau_event").addEventListener("mouseup", btIntroBatDauMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀䈀琀䤀渀琀爀漀䈀愀琀䐀愀甀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("btIntroBatDau_event").removeEventListener("click", btIntroBatDauClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀䤀渀琀爀漀䈀愀琀䐀愀甀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 戀琀䤀渀琀爀漀䈀愀琀䐀愀甀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addBtIntroBatDauEvent();਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
var btThoatBangXepHangClick = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ椀昀⠀攀瘀攀渀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ഀ
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);਍ऀ⼀⼀ 眀爀椀琀攀 挀漀搀攀 戀攀氀漀眀 栀攀爀攀ഀ
	backToIntro();਍紀ഀ
਍瘀愀爀 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀䐀漀眀渀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	tmpTarget = event.target.id;਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 琀爀甀攀㬀ഀ
    document.getElementById("btThoatBangXepHang_event").addEventListener("click", btThoatBangXepHangClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var btThoatBangXepHangMouseUp = function(event){਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	setHoverButton("#btThoatBangXepHang_hover",true);਍ऀ氀漀挀欀䠀漀瘀攀爀 㴀 昀愀氀猀攀㬀ഀ
}਍ഀ
var btThoatBangXepHangMouseOver = function(event) {਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		tmpTarget = event.target.id;਍ऀऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		setHoverButton("#btThoatBangXepHang_hover",true);਍ऀ紀ഀ
	document.getElementById("btThoatBangXepHang_event").addEventListener("mouseout", btThoatBangXepHangMouseOut);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
}਍ഀ
var btThoatBangXepHangMouseOut = function(event) {਍ऀ开琀洀瀀吀愀爀最攀琀刀攀猀攀琀吀愀戀 㴀 ∀∀㬀ഀ
	try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	removeBtThoatBangXepHangEvent();਍ऀ椀昀⠀℀氀漀挀欀䠀漀瘀攀爀⤀笀ഀ
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";਍ऀऀ开琀愀戀䤀搀㴀开琀愀戀䤀搀⸀爀攀瀀氀愀挀攀⠀∀开琀愀戀∀Ⰰ∀开攀瘀攀渀琀∀⤀㬀ഀ
		if(_tabId == event.target.id) {਍ऀऀऀ␀⠀∀⌀猀瘀最∀⤀⸀挀猀猀⠀∀挀甀爀猀漀爀∀Ⰰ∀∀⤀㬀ഀ
			return;਍ऀऀ紀ഀ
		setHoverButton("#btThoatBangXepHang_hover",false);਍ऀ紀ഀ
}਍ഀ
var addBtThoatBangXepHangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀瘀攀爀∀Ⰰ 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀伀瘀攀爀⤀㬀ഀ
	document.getElementById("btThoatBangXepHang_event").addEventListener("mousedown", btThoatBangXepHangMouseDown);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀甀瀀∀Ⰰ 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䴀漀甀猀攀唀瀀⤀㬀ഀ
}਍ഀ
var removeBtThoatBangXepHangEvent = function() {਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 戀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("btThoatBangXepHang_event").removeEventListener("mouseout", btThoatBangXepHangMouseOut);਍紀ഀ
਍愀搀搀䈀琀吀栀漀愀琀䈀愀渀最堀攀瀀䠀愀渀最䔀瘀攀渀琀⠀⤀㬀ഀ
//=======================================================਍瘀愀爀 猀漀甀渀搀䌀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
    try {਍        椀昀 ⠀搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㄀ ☀☀ 搀攀琀攀挀琀洀漀戀⠀⤀ ℀㴀 ㌀⤀ഀ
            if (event.which == 3 || event.which == 2) {਍                爀攀琀甀爀渀㬀ഀ
            }਍    紀 挀愀琀挀栀 ⠀攀爀爀漀爀⤀ 笀紀ഀ
	if(event != undefined)਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀∀⬀最攀琀䤀搀䈀甀琀琀漀渀⠀琀洀瀀吀愀爀最攀琀⤀⬀∀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	// write code below here਍ऀ洀甀琀攀匀漀甀渀搀⠀⤀㬀ഀ
}਍ഀ
var soundMouseDown = function(event) {਍    琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
	lockHover = true;਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀猀漀甀渀搀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀挀氀椀挀欀∀Ⰰ 猀漀甀渀搀䌀氀椀挀欀⤀㬀ഀ
    document.getElementById("sound_event").addEventListener("mouseup", soundMouseUp);਍紀ഀ
਍瘀愀爀 猀漀甀渀搀䴀漀甀猀攀唀瀀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀ഀ
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);਍ऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀猀漀甀渀搀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	lockHover = false;਍紀ഀ
਍瘀愀爀 猀漀甀渀搀䴀漀甀猀攀伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	if(!lockHover){਍ऀऀ琀洀瀀吀愀爀最攀琀 㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀㬀ഀ
		_tmpTargetResetTab = event.target.id;਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀猀漀甀渀搀开栀漀瘀攀爀∀Ⰰ琀爀甀攀⤀㬀ഀ
	}਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀猀漀甀渀搀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 猀漀甀渀搀䴀漀甀猀攀伀甀琀⤀㬀ഀ
	document.getElementById("sound_event").addEventListener("mousedown", soundMouseDown);਍紀ഀ
਍瘀愀爀 猀漀甀渀搀䴀漀甀猀攀伀甀琀 㴀 昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀ 笀ഀ
	_tmpTargetResetTab = "";਍ऀ琀爀礀 笀ഀ
        if (detectmob() != 1 && detectmob() != 3)਍            椀昀 ⠀攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㌀ 簀簀 攀瘀攀渀琀⸀眀栀椀挀栀 㴀㴀 ㈀⤀ 笀ഀ
                return;਍            紀ഀ
    } catch (error) {}਍ऀ爀攀洀漀瘀攀匀漀甀渀搀䔀瘀攀渀琀⠀⤀㬀ഀ
	if(!lockHover){਍ऀऀ瘀愀爀 开琀愀戀䤀搀 㴀 ⠀琀愀戀吀愀爀最攀琀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 琀愀戀吀愀爀最攀琀嬀　崀⸀椀搀 㨀 ∀∀㬀ഀ
		_tabId=_tabId.replace("_tab","_event");਍ऀऀ椀昀⠀开琀愀戀䤀搀 㴀㴀 攀瘀攀渀琀⸀琀愀爀最攀琀⸀椀搀⤀ 笀ഀ
			$("#svg").css("cursor","");਍ऀऀऀ爀攀琀甀爀渀㬀ഀ
		}਍ऀऀ猀攀琀䠀漀瘀攀爀䈀甀琀琀漀渀⠀∀⌀猀漀甀渀搀开栀漀瘀攀爀∀Ⰰ昀愀氀猀攀⤀㬀ഀ
	}਍紀ഀ
਍瘀愀爀 愀搀搀匀漀甀渀搀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("sound_event").addEventListener("mouseover", soundMouseOver);਍ऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀猀漀甀渀搀开攀瘀攀渀琀∀⤀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀搀漀眀渀∀Ⰰ 猀漀甀渀搀䴀漀甀猀攀䐀漀眀渀⤀㬀ഀ
	document.getElementById("sound_event").addEventListener("mouseup", soundMouseUp);਍紀ഀ
਍瘀愀爀 爀攀洀漀瘀攀匀漀甀渀搀䔀瘀攀渀琀 㴀 昀甀渀挀琀椀漀渀⠀⤀ 笀ഀ
    document.getElementById("sound_event").removeEventListener("click", soundClick);਍    搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀猀漀甀渀搀开攀瘀攀渀琀∀⤀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀∀洀漀甀猀攀漀甀琀∀Ⰰ 猀漀甀渀搀䴀漀甀猀攀伀甀琀⤀㬀ഀ
}਍ഀ
addSoundEvent();