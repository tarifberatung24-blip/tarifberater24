import { Suspense } from 'react';
import LeadCapture from '@/features/LeadCapture';

function LeadCaptureContent() {
  return <LeadCapture />;
}

export default function LeadCapturePage() {
  return (
    <Suspense fallback={<div>Зареждане...</div>}>
      <LeadCaptureContent />
    </Suspense>
  );
}
