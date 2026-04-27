const TrustedByAvatars = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="avatar-group -space-x-3">
        <div className="avatar">
          <div className="w-7">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-7">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-7">
            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-7">
            <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
          </div>
        </div>
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral/10 backdrop-blur-sm text-base-content/40 w-7 text-xs">
            <span>8K+</span>
          </div>
        </div>
      </div>
      <div className="text-base-content/70 text-sm">
        Trusted by thousands of healthy families
      </div>
    </div>
  );
};

export default TrustedByAvatars;
