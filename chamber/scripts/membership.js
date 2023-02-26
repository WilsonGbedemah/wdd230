function showMemberBanner(level){
    document.getElementById("benefits").innerHTML = "";
    if(level === 'gold'){
      document.getElementById("member_lev").innerHTML = 'GOLD MEMBER';
      document.getElementById("price").innerHTML = '$29.99/mo';
      showBenefits(level);
    } else if(level === 'silver'){
      document.getElementById("member_lev").innerHTML = 'SILVER MEMBER';
      document.getElementById("price").innerHTML = '$19.99/mo';
      showBenefits(level);
    } else if(level === 'bronze'){
      document.getElementById("member_lev").innerHTML = 'BRONZE MEMBER';
      document.getElementById("price").innerHTML = '$9.99/mo';
      showBenefits(level);
    } else {
      document.getElementById("member_lev").innerHTML = 'NP MEMBER';
      document.getElementById("price").innerHTML = '$0.00';
      showBenefits(level);
    }
  }
  
  function showAllowedBenefit(benefit){
    let span = document.createElement('span');
    span.classList.add('benefit');
    let childSpan = document.createElement('span');
    childSpan.classList.add('check');
    childSpan.append('✔');
    span.append(childSpan)
    span.append(benefit);
    document.getElementById("benefits").append(span)
  }
  
  function showUnallowedBenefit(benefit){
    let span = document.createElement('span');
    span.classList.add('benefit');
    let childSpan = document.createElement('span');
    childSpan.classList.add('x');
    childSpan.append('✘');
    span.append(childSpan)
    span.append(benefit);
    document.getElementById("benefits").append(span)
  }
  
  function showBenefits(level){
    const benefits = ['training', 'advertising', 'support 24/7', 'event discounts', 'business contacts', 'customer referrals', 'visibility in the community', 'funding opportunities'];
    if(level==='gold'){
      const allowed = ['training', 'advertising', 'support 24/7', 'event discounts', 'business contacts', 'customer referrals', 'visibility in the community', 'funding opportunities'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
        else{
         showUnallowedBenefit(benefit);
        }
      })
    }else if(level==='silver'){
      const allowed = ['training', 'advertising', 'event discounts', 'business contacts', 'visibility in the community', 'funding opportunities'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
        else{
         showUnallowedBenefit(benefit);
        }
      })
    }else if(level==='bronze'){
      const allowed = ['training', 'event discounts', 'visibility in the community', 'funding opportunities'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
        else{
         showUnallowedBenefit(benefit);
        }
      })
    } else {
      const allowed = ['training', 'visibility in the community'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
        else{
         showUnallowedBenefit(benefit);
        }
      })
    }
  }
  
  document.getElementById("membershipLevel").addEventListener("change", ()=>{
    document.getElementById("member-ban").classList.remove("hidden");
    document.getElementById("member-ban").classList.remove("flex-box");
    document.getElementById("member-ban").classList.add("flex-box");
    let level = document.getElementById("membershipLevel").value;
    showMemberBanner(level);
  });
  
  
  