import LogoBig from '../icons/big-logo';

const LoadingSpinner: React.FC<{ className?: string; cover?: boolean; size?: number }> = ({
    className,
    cover = false,
    size = 64,
}) => {
    return (
        <div className={`flex items-center justify-center ${cover ? 'h-screen w-full' : ''} ${className}`}>
            <LogoBig className="animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
