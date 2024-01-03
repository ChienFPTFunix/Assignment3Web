"use strict";
/* ///////////////////////////////////
        MUC TIEU NGHE NGHIEP & THONG TIN CA NHAN */
const handleSubmit = function () {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(checkMail);

  if (check) {
    document.querySelector(".info").classList.remove("hidden");
    document.querySelector(".submit-email").classList.add("hidden");
    errorEmail.innerHTML = "Xin hãy nhập đúng định dạng email";
  } else {
    errorEmail.innerHTML = "Xin hãy nhập đúng định dạng email";
  }
};

/* ///////////////////////////////////
        JOB INFO */
const cacMucJob = document.querySelectorAll(".cac-muc-job");
console.log(cacMucJob);

cacMucJob.forEach((muc) => {
  muc.addEventListener("mouseover", function () {
    if (muc.querySelector(".section-content").classList.contains("hidden")) {
      muc.querySelector(".btn-viewmore").classList.remove("hidden");
    } else {
      muc.querySelector(".btn-viewless").classList.remove("hidden");
    }

    muc.addEventListener("mouseleave", function () {
      muc.querySelector(".btn-viewmore").classList.add("hidden");
      muc.querySelector(".btn-viewless").classList.add("hidden");
    });

    muc.querySelector(".btn-viewmore").addEventListener("click", function () {
      muc.querySelector(".section-content").classList.remove("hidden");
      muc.querySelector(".btn-viewmore").classList.add("hidden");
    });
    muc.querySelector(".btn-viewless").addEventListener("click", function () {
      muc.querySelector(".section-content").classList.add("hidden");
      muc.querySelector(".btn-viewless").classList.remove("hidden");
    });
  });
});
